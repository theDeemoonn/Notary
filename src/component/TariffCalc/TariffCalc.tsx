import React, {useState} from 'react';
import './_TariffCalc.scss';


interface TariffProps {
    increment?: number | undefined
    data: string
    fixPrice?: number
    onClickFunction: (increment: number) => void
}


function TariffCalc() {
    const Button = ({increment, onClickFunction, data, fixPrice}: TariffProps) => {
        const handleClick = () => {
            if (increment) {
                onClickFunction(increment)
            }
            if (fixPrice) {
                onClickFunction(fixPrice)
            }

        }
        return <button onClick={handleClick}>{data}</button>
    }


    const [count, setCount] = useState<number | undefined>()


    const incrementCount = (increment: number) => {
        if (typeof count !== 'undefined') {
            setCount(Number(count) * Number(increment))
        }


    }

    const onChangeHandler = (event: any) => {
        setCount(event.target.value);
    };


    const [fixPriceCount, setFixPriceCount] = useState<number | undefined>()

    const fixPrice = (fixPrice: number) => {
        if (typeof count !== 'undefined') {
            setFixPriceCount(Number(count) + Number(fixPrice))
        }
    };

    const result = () => {
        if (typeof fixPriceCount !== 'undefined') {
            return fixPriceCount + ' рублей';
        }
    }
    const result2 = result()


    return (
        <div className='TariffCalc'>
            <p>Калькулятор тарифов<sup>*</sup></p>
            <input
                name='count'
                onChange={onChangeHandler}
                value={count}
                placeholder={'Введите сумму'}
            />
            <Button increment={0.001} onClickFunction={incrementCount} data='*0.1%'/>
            <Button increment={0.0015} onClickFunction={incrementCount} data='*0.15%'/>
            <Button increment={0.002} onClickFunction={incrementCount} data='*0.2%'/>
            <Button increment={0.003} onClickFunction={incrementCount} data='*0.3%'/>
            <Button increment={0.004} onClickFunction={incrementCount} data='*0.4%'/>
            <Button increment={0.005} onClickFunction={incrementCount} data='*0.5%'/>
            <Button increment={0.006} onClickFunction={incrementCount} data='*0.6%'/>
            <Button fixPrice={1000} onClickFunction={fixPrice} data='+1000₽'/>
            <Button fixPrice={2500} onClickFunction={fixPrice} data='+2500₽'/>
            <Button fixPrice={3000} onClickFunction={fixPrice} data='+3000₽'/>
            <Button fixPrice={4000} onClickFunction={fixPrice} data='+4000₽'/>
            <Button fixPrice={4300} onClickFunction={fixPrice} data='+4300₽'/>
            <Button fixPrice={4500} onClickFunction={fixPrice} data='+4500₽'/>
            <Button fixPrice={5000} onClickFunction={fixPrice} data='+5000₽'/>
            <Button fixPrice={5900} onClickFunction={fixPrice} data='+5900₽'/>
            <Button fixPrice={6000} onClickFunction={fixPrice} data='+6000₽'/>
            <Button fixPrice={7600} onClickFunction={fixPrice} data='+7600₽'/>
            <Button fixPrice={10000} onClickFunction={fixPrice} data='+10000₽'/>


            <span>{result2}</span>
        </div>
    )
}

export default TariffCalc;
