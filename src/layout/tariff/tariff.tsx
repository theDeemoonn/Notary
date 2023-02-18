import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion'
import './_tariff.scss';
import '../../index.scss'
import {usePdf} from "@mikecousins/react-pdf";

function Tariff() {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const scale = () => {
        if (window.innerWidth <= 576) {
            return 0.5
        } else if (window.innerWidth <= 768) {
            return 0.7
        } else if (window.innerWidth <= 990) {
            return 0.8
        } else if (window.innerWidth <= 1200) {
            return 1
        } else {
            return 1.2
        }
    }

    const {pdfDocument, pdfPage} = usePdf({
        file: './2023.pdf',
        page,
        canvasRef,
        scale: Number(scale())
    });

    return (


        <motion.div className="tariff"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            {/*<div className="tariff__header">*/}
            {/*    <h1 className='text-center mt-lg-5'>Тарифы</h1>*/}
            {/*    <p className='m-lg-4 text-center me-lg-5 ms-lg-5'>РАЗМЕРЫ НОТАРИАЛЬНОГО ТАРИФА И ПЛАТЫ ЗА УСЛУГИ*/}
            {/*        ПРАВОВОГО И ТЕХНИЧЕСКОГО*/}
            {/*        ХАРАКТЕРА, ВЗИМАЕМОГО ЗА СОВЕРШЕНИЕ НОТАРИАЛЬНЫХ ДЕЙСТВИЙ НОТАРИУСАМИ РЕСПУБЛИКИ АДЫГЕЯ НА 2022*/}
            {/*        ГОД</p>*/}
            {/*</div>*/}


            {/*<TariffCalc/>*/}
            {/*<ScrollUp/>*/}

            <div className='tariff__pdf'>
                {!pdfDocument && <span>Loading...</span>}
                <canvas ref={canvasRef}/>
                {Boolean(pdfDocument && pdfDocument.numPages) && (
                    <nav>
                        <ul className="pager">
                            <li className="previous">
                                <button className='btn btn-outline-primary' disabled={page === 1}
                                        onClick={() => setPage(page - 1)}>
                                    Предыдущая {page - 1} / {pdfDocument!.numPages}
                                </button>
                            </li>
                            <li className="next">
                                <button className='btn btn-outline-primary'
                                        disabled={page === pdfDocument!.numPages}
                                        onClick={() => setPage(page + 1)}
                                >
                                    Следующая &nbsp; {page} / {pdfDocument!.numPages}
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
            {/*<Table/>*/}


            {/*<p className="tariff__disclaimer"><sup>*</sup>Калькулятор создан только в ознакомительных целях. Подробную*/}
            {/*    информацию уточняйте по телефону</p>*/}


        </motion.div>


    );
}


export default Tariff;