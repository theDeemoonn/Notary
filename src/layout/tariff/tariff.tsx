import React from 'react';
import './_tariff.scss';
import Table from "./table/table";
import Footer from "../Footer/Footer";
import Navibar from "../../component/Navbar/Navbar";
import '../../index.scss'

function Tariff() {
    return (


        <div className="tariff">
            <header className='_header'>
                <Navibar/>
            </header>
            <div className="tariff__header">
                <h1>Тарифы</h1>
                <p className='tariff__title'>РАЗМЕРЫ НОТАРИАЛЬНОГО ТАРИФА И ПЛАТЫ ЗА УСЛУГИ ПРАВОВОГО И ТЕХНИЧЕСКОГО
                    ХАРАКТЕРА, ВЗИМАЕМОГО ЗА СОВЕРШЕНИЕ НОТАРИАЛЬНЫХ ДЕЙСТВИЙ НОТАРИУСАМИ РЕСПУБЛИКИ АДЫГЕЯ НА 2022
                    ГОД</p>
            </div>
            <div>


                {/*<TariffCalc/>*/}


                <Table/>

            </div>
            {/*<p className="tariff__disclaimer"><sup>*</sup>Калькулятор создан только в ознакомительных целях. Подробную*/}
            {/*    информацию уточняйте по телефону</p>*/}

            <Footer/>


        </div>


    );
}


export default Tariff;