import React from 'react';
import {motion} from 'framer-motion'
import './_tariff.scss';
import Table from "./table/table";
import '../../index.scss'
import ScrollUp from "../../component/ScrollUp/ScrollUp";

function Tariff() {
    return (


        <motion.div className="tariff"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className="tariff__header">
                <h1>Тарифы</h1>
                <p className='tariff__title'>РАЗМЕРЫ НОТАРИАЛЬНОГО ТАРИФА И ПЛАТЫ ЗА УСЛУГИ ПРАВОВОГО И ТЕХНИЧЕСКОГО
                    ХАРАКТЕРА, ВЗИМАЕМОГО ЗА СОВЕРШЕНИЕ НОТАРИАЛЬНЫХ ДЕЙСТВИЙ НОТАРИУСАМИ РЕСПУБЛИКИ АДЫГЕЯ НА 2022
                    ГОД</p>
            </div>
            <div>


                {/*<TariffCalc/>*/}
                <ScrollUp/>


                <Table/>

            </div>
            {/*<p className="tariff__disclaimer"><sup>*</sup>Калькулятор создан только в ознакомительных целях. Подробную*/}
            {/*    информацию уточняйте по телефону</p>*/}


        </motion.div>


    );
}


export default Tariff;