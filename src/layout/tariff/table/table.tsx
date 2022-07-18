import React  from 'react';
import './_table.scss';




function Table(): JSX.Element {


    return (
        <div className="table">
            <table cellPadding={0} cellSpacing={0} className="t1">
            <tbody>
            <tr>
            <td className="td1" valign="middle">
            <p className="p1"><strong>№</strong></p>
            </td>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p1"><strong>Вид нотариального действия</strong></p>
            </td>
            <td className="td3" valign="middle">
            <p className="p1"><strong>Размеры нотариального тарифа и платы за услуги правового и технического характера, взимаемого за совершение нотариальных действий</strong></p>
            </td>
            <td className="td4" colSpan={2} valign="middle">
            <p className="p1"><strong>Общая сумма</strong></p>
            </td>
            <td className="td5" valign="middle">
            <p className="p1"><strong>Размеры нотариального тарифа и платы за услуги правового и технического характера, взимаемого за совершение нотариальных действий совершаемых удаленно или совершаемых двумя и более нотариусами</strong></p>
            </td>
            <td className="td6" valign="middle">
            <p className="p1"><strong>Общая сумма<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p1"><strong>за нотариальные действия, совершаемые удаленно, и сделки, удостоверяемые двумя и более нотариусами</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td7" rowSpan={11} valign="top">
            <p className="p2"><strong>1</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение сделок, предметом которых является отчуждение недвижимого имущества не подлежащих обязательному нотариальному удостоверению (пп. 1. п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>45&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>13 338,56</strong></span><strong>&nbsp;руб.) пункт 19 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>12 818</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td9" colSpan={9} valign="top">
            <p className="p2">- близким родственникам супругу, родителям, детям, внукам:</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <ul className="ul1">
            <li className="li2">до 10 000 000 рублей включительно</li>
            </ul>
            </td>
            <td className="td11" valign="middle">
                    <p className="p3">3000 руб. + 0,2 процента оценки недвижимого имущества (суммы сделки) + <span className="s1">4000 руб. УПТХ</span><span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p5"><span className="s3">3000 руб. + 0,2 процента оценки недвижимого имущества (суммы сделки) +&nbsp;</span><span className="s4">12 818</span><span className="s3">&nbsp;руб. УПТХ</span></p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <ul className="ul1">
            <li className="li2">свыше 10 000 000 рублей<span className="Apple-converted-space">&nbsp;</span></li>
            </ul>
            </td>
            <td className="td11" valign="middle">
            <p className="p3">23000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., но не более 50000 руб. + <span className="s1">4000 руб. УПТХ</span></p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p5">23000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., но не более 50000 руб. + <span className="s1">12 818</span> руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td9" colSpan={9} valign="top">
            <p className="p6">- другим лицам в зависимости от суммы сделки:</p>
            </td>
            </tr>
            <tr>
            <td className="td15" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">до 1 000 000 рублей включительно</p>
            </td>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p3">3000 руб. + 0,4 % суммы сделки + <span className="s1">4000 руб.</span> УПТХ</p>
            </td>
            <td className="td18" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td19" rowSpan={2} valign="middle">
            <p className="p5">3000 руб. + 0,4 % суммы сделки + <span className="s1">12 818</span> руб. УПТХ</p>
            </td>
            <td className="td20" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p3">3000 руб. + 0,4 % суммы сделки + <span className="s1">6000 руб.</span> УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td21" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">свыше 1 000 000 рублей до 10 000 000 рублей включительно</p>
            </td>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p3"><span className="s3">7000 руб. + 0,2% суммы сделки, превышающей 1 000 000 руб. +&nbsp;</span><span className="s4">4000 руб. УПТХ</span></p>
            </td>
            <td className="td24" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td25" rowSpan={2} valign="middle">
            <p className="p5">7000 руб. + 0,2% суммы сделки, превышающей 1 000 000 руб. + <span className="s1">12 818</span> руб. УПТХ</p>
            </td>
            <td className="td26" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p3">7000 руб. + 0,2% суммы сделки, превышающей 1 000 000 руб. + <span className="s1">6000 руб.</span> УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td27" colSpan={2} rowSpan={2} valign="middle">
            <p className="p6">свыше 10 000 000 рублей <span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td28" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td29" valign="middle">
            <p className="p7">25000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., а в случае отчуждения жилых помещений (квартир, комнат, жилых домов) и земельных участков, занятых жилыми домами, - не более 100000 руб. + <span className="s1">4000 руб. УПТХ</span></p>
            </td>
            <td className="td30" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td31" rowSpan={2} valign="middle">
            <p className="p5">25000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., а в случае отчуждения жилых помещений (квартир, комнат, жилых домов) и земельных участков, занятых жилыми домами, - не более 100000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">12 818</span> руб. УПТХ</p>
            </td>
            <td className="td32" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td33" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td34" valign="middle">
            <p className="p7">25000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., а в случае отчуждения жилых помещений (квартир, комнат, жилых домов) и земельных участков, занятых жилыми домами, - не более 100000 руб. + <span className="s1">6000 руб. УПТХ</span></p>
            </td>
            </tr>
            <tr>
            <td className="td35" rowSpan={4} valign="top">
            <p className="p2">2</p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение договора по оформлению в долевую собственность родителей и детей жилого помещения, приобретенного с использованием средств материнского капитала не подлежащих обязательному нотариальному удостоверению (пп. 1. п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>59&nbsp;</strong></span><strong>ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>6062,98</strong></span><strong>&nbsp;руб.); пункт&nbsp;</strong><span className="s1"><strong>11</strong></span><strong>&nbsp;ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>5 827</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <ul className="ul1">
            <li className="li2">до 1 000 000 рублей включительно</li>
            </ul>
            </td>
            <td className="td17" valign="middle">
            <p className="p3">3000 руб. + 0,4 % суммы сделки + <span className="s1">2500 руб.</span> УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p5">3000 руб. + 0,4 % суммы сделки + <span className="s1">5 827</span> руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <ul className="ul1">
            <li className="li2">свыше 1 000 000 рублей до 10 000 000 рублей включительно</li>
            </ul>
            </td>
            <td className="td23" valign="middle">
            <p className="p3"><span className="s3">7000 руб. + 0,2% суммы сделки, превышающей 1 000 000 руб. +&nbsp;</span><span className="s4">2500 руб.</span><span className="s3">&nbsp;УПТХ</span></p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td43" valign="middle">
            <p className="p5">7000 руб. + 0,2% суммы сделки, превышающей 1 000 000 руб. + <span className="s1">5 827</span> руб. УПТХ</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td45" colSpan={4} valign="middle">
            <ul className="ul1">
            <li className="li6">свыше 10 000 000 рублей <span className="Apple-converted-space">&nbsp;</span></li>
            </ul>
            </td>
            <td className="td29" valign="middle">
            <p className="p7">25000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., а в случае отчуждения жилых помещений (квартир, комнат, жилых домов) и земельных участков, занятых жилыми домами, - не более 100000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">2500 руб.</span> УПТХ</p>
            </td>
            <td className="td46" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td47" valign="middle">
            <p className="p5">25000 руб. + 0,1% суммы сделки, превышающей 10000000 руб., а в случае отчуждения жилых помещений (квартир, комнат, жилых домов) и земельных участков, занятых жилыми домами, - не более 100000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">5 827</span> руб. УПТХ</p>
            </td>
            <td className="td48" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td49" rowSpan={9} valign="top">
            <p className="p2"><strong>3</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p6"><strong>За удостоверение прочих договоров, предмет которых подлежит оценке, если такое удостоверение требует обязательного нотариального удостоверения в соответствии с законодательством Российской Федерации (пп. 5 п.1 ст. 333.24 НК РФ) (пункт&nbsp;</strong><span className="s1"><strong>74</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.) В действии с 1 июня 2019 года Федеральным законом от 19.07.2018 N 217-ФЗ статья 1118 дополняется новым пунктом 6.<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td50" colSpan={4} valign="middle">
            <p className="p6">- <strong>сделки по отчуждению доли в праве общей собственности;</strong></p>
            <p className="p6">- <strong>сделки по отчуждению недвижимого имущества, принадлежащего несовершеннолетнему гражданину или гражданину, признанному ограниченно недееспособным;</strong></p>
            <p className="p6"><strong>- сделки с недвижимым имуществом на условиях доверительного управления или опеки;</strong></p>
            <p className="p6">(<strong>социально значимое нотариальное действие)</strong> (пункт <span className="s1">36</span> ФНП - предельный размер платы за оказание УПТХ<span className="Apple-converted-space">&nbsp;&nbsp;</span>– <span className="Apple-converted-space">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span className="s1">7 275,58</span> руб.);<strong>&nbsp;пункт&nbsp;</strong><span className="s1"><strong>12&nbsp;</strong></span><strong>ФНП предельный размер платы за оказание УПТХ удаленно –<span className="Apple-converted-space">&nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span className="s1"><strong>6 992</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            <td className="td51" valign="middle">
            <p className="p8">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">5000 руб. УПТХ</span></p>
            </td>
            <td className="td52" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td53" valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">6 992</span> руб. УПТХ</p>
            </td>
            <td className="td54" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td55" colSpan={4} valign="middle">
            <p className="p6">- <strong>удостоверение договора ренты и пожизненного содержания с иждивением&nbsp;</strong>(пункт <span className="s1">42</span> ФНП предельный размер платы за оказание УПТХ – <span className="s1">8 488,17</span> руб.); <strong>пункт&nbsp;</strong><span className="s1"><strong>14</strong></span><strong>&nbsp;ФНП предельный размер платы за оказание УПТХ удаленно –<span className="Apple-converted-space">&nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span className="s1"><strong>8 157</strong></span><strong>&nbsp;руб.</strong> (социально значимое нотариальное действие)</p>
            </td>
            <td className="td56" valign="middle">
            <p className="p9">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">7600&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td57" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td58" valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">8 157</span> руб. УПТХ</p>
            </td>
            <td className="td59" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p2"><strong>- удостоверение наследственного договора (пункт&nbsp;</strong><span className="s1"><strong>74</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.) В действии с 1 июня 2019 года Федеральным законом от 19.07.2018 N 217-ФЗ статья 1118 дополняется новым пунктом 6.<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td61" valign="middle">
            <p className="p10">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 10000 руб. УПТХ</p>
            </td>
            <td className="td62" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p6">- <strong>соглашение о разделе общего имущества, нажитого супругами в период брака</strong> (пункт <span className="s1">46</span> ФНП - предельный размер платы за оказание УПТХ – <span className="s1">12 125,96</span> руб.; пункт 17 ФНП<strong>&nbsp;</strong>предельный размер платы за оказание УПТХ удаленно –<strong><span className="Apple-converted-space">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span className="s1">11 653</span><strong>&nbsp;руб.</strong>);</p>
            </td>
            <td className="td61" valign="middle">
            <p className="p10">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">6000</span> руб. УПТХ</p>
            </td>
            <td className="td62" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">11 653&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p6">- <strong>соглашение о разделе наследственного имущества</strong> (пункт <span className="s1">47</span> ФНП - предельный размер платы за оказание УПТХ по недвижимости – <span className="s1">12 125,96</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб.); <strong>пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –<span className="Apple-converted-space">&nbsp; &nbsp;&nbsp;</span></strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            <td className="td61" valign="middle">
            <p className="p10">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 4000 руб. УПТХ</p>
            </td>
            <td className="td62" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ <span className="s1">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p12"><br /></p>
            <p className="p13"><br /></p>
            <p className="p13"><br /></p>
            <p className="p13"><br /></p>
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td65" colSpan={4} valign="middle">
            <p className="p6">- договор условного депонирования (эскроу) подлежит обязательному нотариальному удостоверению за исключением случаев депонирования безналичных денежных средств и (или) бездокументарных ценных бумаг ст. 926.1 ГК РФ ФЗ 212 от 26.07.2017 г. вступил в силу с 01.09.2018г. (пункт <span className="s1">47</span> ФНП – предельный размер платы за оказание УПТХ – <span className="s1">12 125,96</span> руб.); пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно – <span className="s1">11 653</span> руб.</p>
            </td>
            <td className="td66" valign="middle">
            <p className="p10">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + 4500 руб. УПТХ</p>
            </td>
            <td className="td67" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td68" valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td69" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p6">- <strong>удостоверение договора конвертируемого займа</strong> (пункт 86 ФНП – 36 377, 88 руб.; пункт 28 ФНП удаленно – 34 959 руб.).</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p10">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">20000 руб. УПТХ</span></p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td43" valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">34 959 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></span></p>
            </td>
            <td className="td44" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td70" colSpan={4} valign="middle">
            <p className="p6">- <strong>иные договоры (соглашения) подлежащие оценке</strong> (пункт 47 ФНП – предельный размер платы за оказание УПТХ – <span className="s1">12 125,96</span> руб.); пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно – <span className="s1">11 653</span> руб.</p>
            </td>
            <td className="td71" valign="middle">
            <p className="p7">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">5000 руб. УПТХ</span></p>
            </td>
            <td className="td72" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p11">0,5% суммы договора, но не менее 300 руб. и не более 20000 руб. + <span className="s1">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td74" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td75" rowSpan={4} valign="top">
            <p className="p2"><strong>4</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="top">
            <p className="p6"><strong>Удостоверение прочих сделок, предмет которых подлежит оценке, в зависимости от суммы сделки (договор купли – продажи автотранспорта, займа, предварительный договор, залог недвижимого имущества и др.) (пп. 4 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>47</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.); пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td76" rowSpan={3} valign="middle">
            <p className="p14"><br /></p>
            <p className="p15"><br /></p>
            <p className="p15"><br /></p>
            <p className="p16">- договор купли – продажи автотранспорта, займа, предварительный договор и др.</p>
            </td>
            <td className="td77" colSpan={3} valign="middle">
            <p className="p3">до 1 000 000 рублей включительно <span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p17">2000 руб. + 0,3% суммы сделки + 1000 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p5">2000 руб. + 0,3% суммы сделки + 11 653 руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td78" colSpan={3} valign="middle">
            <p className="p2">свыше 1 000 000 рублей до 10 000 000 рублей включительно</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p17">5000 руб. + 0,2% суммы договора, превышающей 1000000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 1000 руб. УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p5">5000 руб. + 0,2% суммы договора, превышающей 1000000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 11 653 руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td78" colSpan={3} valign="middle">
            <p className="p3">свыше 10 000 000 рублей</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p18">23000 руб. + 0,1% суммы договора, превышающей 10000000 руб., но не более 500000 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p5">23000 руб. + 0,1% суммы договора, превышающей 10000000 руб., но не более 500000 руб. + 11 653 руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td79" rowSpan={3} valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td80" rowSpan={3} valign="middle">
            <p className="p19">- удостоверение договора залога недвижимого имущества</p>
            </td>
            <td className="td77" colSpan={3} valign="middle">
            <p className="p19">до 1000000 рублей включительно <span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p20">2000 руб. + 0,3% суммы сделки + 3000 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p5">2000 руб. + 0,3% суммы сделки + 11 653 руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td81" colSpan={3} valign="middle">
            <p className="p16">свыше 1000000 рублей до 10000000 рублей включительно</p>
            <p className="p4"><br /></p>
            </td>
            <td className="td82" valign="middle">
            <p className="p19">5000 руб. + 0,2% суммы договора, превышающей 1000000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 3000 руб. УПТХ</p>
            </td>
            <td className="td83" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td84" valign="middle">
            <p className="p5">5000 руб. + 0,2% суммы договора, превышающей 1000000 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>+ 11 653 руб. УПТХ</p>
            </td>
            <td className="td85" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td78" colSpan={3} valign="middle">
            <p className="p16">свыше 10000000 рублей</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p21">23000 руб. + 0,1% суммы договора, превышающей 10000000 руб., но не более 500000 руб. + 3000 руб. УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p5">23000 руб. + 0,1% суммы договора, превышающей 10000000 руб., но не более 500000 руб. + 11 653 руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td86" rowSpan={7} valign="top">
            <p className="p2"><strong>5</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p6"><strong>За удостоверение договоров отчуждения доли или части доли в уставном капитале ООО, сторонами которых являются физические и российские юридические лица (пп. 4.1 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>49</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ по отчуждению –&nbsp;</strong><span className="s1"><strong>20 614,13</strong></span><strong>&nbsp;руб.; пункт 21 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>19 810</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td15" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">до 1000000 рублей</p>
            </td>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p6">0,5% суммы договора, но не менее 1500 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td18" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td19" rowSpan={2} valign="middle">
            <p className="p5">0,5% суммы договора, но не менее 1500 руб. + <span className="s1">19 810</span> руб. УПТХ</p>
            </td>
            <td className="td20" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p6">0,5% суммы договора, но не менее 1500 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td21" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">от 1000001 руб. до 10000000 рублей включительно</p>
            </td>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p6">5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td24" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td25" rowSpan={2} valign="middle">
            <p className="p5">5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + <span className="s1">19 810</span> руб. УПТХ</p>
            </td>
            <td className="td26" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p6">5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td87" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">свыше 10000001 рублей</p>
            </td>
            <td className="td88" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p6">32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td89" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td90" rowSpan={2} valign="middle">
            <p className="p5">32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + <span className="s1">19 810</span> руб. УПТХ</p>
            </td>
            <td className="td91" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td88" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p6">32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td86" rowSpan={7} valign="top">
            <p className="p2"><strong>6</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p6"><strong>За удостоверение договоров о залоге доли или части доли в уставном капитале ООО, сторонами которых являются физические и российские юридические лица (пп. 4.1 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>52</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ по залогу –&nbsp;</strong><span className="s1"><strong>26 677,11</strong></span><strong>&nbsp;руб.; пункт 22 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>25 637</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td15" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">до 1000000 рублей</p>
            </td>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p6">0,5% суммы договора, но не менее 1500 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td18" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td19" rowSpan={2} valign="middle">
            <p className="p5">до 1000000 рублей - 0,5% суммы договора, но не менее 1500 руб. + <span className="s1">25 637</span> руб. УПТХ</p>
            </td>
            <td className="td20" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td16" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p6">0,5% суммы договора, но не менее 1500 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td21" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">от 1000001 руб. до 10000000 рублей включительно</p>
            </td>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p6">5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td24" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td25" rowSpan={2} valign="middle">
            <p className="p5">от 1000001 руб. до 10000000 рублей включительно - 5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + <span className="s1">25 637</span> руб. УПТХ</p>
            </td>
            <td className="td26" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td22" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p6">5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td87" colSpan={2} rowSpan={2} valign="middle">
            <p className="p2">свыше 10000001 рублей</p>
            </td>
            <td className="td88" colSpan={2} valign="middle">
            <p className="p2">для физ. лиц</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p6">32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + 16500 руб. УПТХ</p>
            </td>
            <td className="td89" colSpan={2} rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td90" rowSpan={2} valign="middle">
            <p className="p5">свыше 10000001 рублей - 32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + <span className="s1">25 637</span> руб. УПТХ</p>
            </td>
            <td className="td91" rowSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td88" colSpan={2} valign="middle">
            <p className="p2">для юр. лиц</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p6">32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + 19000 руб. УПТХ</p>
            </td>
            </tr>
            <tr>
            <td className="td92" rowSpan={4} valign="top">
            <p className="p2"><strong>7</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p6"><strong>За удостоверение договоров отчуждения и залога доли или части доли в уставном капитале ООО если одной из сторон является иностранное юридическое лицо (пп. 4.1 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>54&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.); пункт 24 ФНП предельный размер платы за оказание УПТХ удаленно&nbsp;</strong><span className="s1"><strong>– 34 959</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p7">до 1000000 рублей - 0,5 % , но не менее 1500 руб. + 25000 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p5">до 1000000 рублей - 0,5 % , но не менее 1500 руб. + <span className="s1">34 959</span> руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td3" valign="middle">
            <p className="p7">от 1000001 руб. до 10000000 рублей включительно - 5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + 34000 руб. УПТХ</p>
            </td>
            <td className="td4" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td5" valign="middle">
            <p className="p5">от 1000001 руб. до 10000000 рублей включительно - 5000 руб. + 0,3% суммы договора, превыш. 1000000 руб. + <span className="s1">34 959</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td93" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td82" valign="middle">
            <p className="p7">свыше 10000001 рублей - 32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + 34000 руб. УПТХ</p>
            </td>
            <td className="td83" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td84" valign="middle">
            <p className="p5">свыше 10000001 рублей - 32000 руб. + 0,15 % суммы договора, превыш. 10000000 руб., но не более 150000 руб. + <span className="s1">34 959</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td85" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td94" rowSpan={4} valign="top">
            <p className="p2"><strong>8</strong></p>
            </td>
            <td className="td95" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение решения органа управления юридического лица (выдача свидетельства об удостоверении факта принятия решения органом управления юридического лица и о составе участников (членов) этого органа, присутствовавших при принятии этого решения) (пп. 12.7 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>32</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>4 001,57</strong></span><strong>&nbsp;руб.);&nbsp;</strong><span className="s5"><strong>удостоверение принятия решений единственным участником (выдача свидетельства об удостоверении факта принятия решения единственным участником (акционером) юридического лица (утверждено решением Правления ФНП протокол № 09/20 от 26.05.2020г.&nbsp;</strong></span><strong>пункт&nbsp;</strong><span className="s1"><strong>81</strong></span><strong>&nbsp;ФНП УПТХ –&nbsp;</strong><span className="s1"><strong>6 062,98</strong></span><strong>, пп.13 п. 1 ст. 22.1 ОЗН); пункт&nbsp;</strong><span className="s1"><strong>82</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –<span className="Apple-converted-space">&nbsp;&nbsp;</span></strong><span className="s1"><strong>5 335,42</strong></span><strong>&nbsp;руб.</strong><span className="s6"><strong><span className="Apple-converted-space">&nbsp;</span></strong></span><strong>&nbsp;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p2">- удостоверение факта принятие решения участниками ООО, АО (пункт <span className="s1">32&nbsp;</span>ФНП)</p>
            </td>
            <td className="td61" valign="middle">
            <p className="p7">3000 руб. - за каждый час присутствия нотариуса на заседании соответствующего органа + 3 000 руб. УПТХ (за каждый час присутствия нотариуса на заседании соответствующего органа)<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td62" colSpan={2} valign="middle">
            <p className="p11">6 000 руб. за каждый час присутствия нотариуса на заседании</p>
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p22">-</p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p2">- удостоверение факта принятия решения единственным участником юр. лица (в том числе об увеличении уставного капитала и т.д.)</p>
            <p className="p2">(пункт <span className="s1">81</span> ФНП)</p>
            </td>
            <td className="td3" valign="middle">
            <p className="p7">100 руб. + 5 900 руб. УПТХ</p>
            </td>
            <td className="td4" colSpan={2} valign="middle">
            <p className="p11">6 000 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td6" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2">- <span className="s1">удостоверение&nbsp;</span>заявления участника ООО о выходе из общества, не являющегося кредитной организацией (пункт <span className="s1">82</span> ФНП)</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p10">500 руб. + 5000 руб. УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p11">5 500 руб.</p>
            <p className="p4"><br /></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td96" rowSpan={2} valign="top">
            <p className="p2"><strong>9</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Подготовка к присутствию на заседании органа управления юридического лица (пункт&nbsp;</strong><span className="s1"><strong>39</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>6 062,98</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td99" valign="middle">
            <p className="p23">3000 руб. УПТХ</p>
            </td>
            <td className="td100" colSpan={2} valign="middle">
            <p className="p11">3000 руб.</p>
            </td>
            <td className="td101" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td102" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td103" rowSpan={2} valign="top">
            <p className="p2"><strong>10</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>Нотариальные действия, совершаемые нотариусом в связи с увеличением уставного капитала общества с ограниченной ответственностью во исполнение договора конвертируемого займа. ( п.12.17 ст. 22.1 ОЗН) Введено в действие с 13 июля 2021 года.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td105" valign="middle">
            <p className="p24">10 000 руб.<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p11"><strong>( п.12.17 ст. 22.1 ОЗН)</strong></p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p24">10 000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td108" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td109" rowSpan={4} valign="top">
            <p className="p2"><strong>11</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение договоров дарения, за исключением договоров дарения недвижимого имущества<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p2"><strong>(пп.2 п.1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>47</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.); пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p25">- <strong>детям, в том числе усыновленным, супругу, родителям, полнородным братьям и сестрам</strong></p>
            </td>
            <td className="td23" valign="middle">
            <p className="p3">0,3% суммы договора, но не менее 200 рублей + 2500 руб. УПТХ</p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td43" valign="middle">
            <p className="p3">0,3% суммы договора, но не менее 200 рублей + <span className="s1">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p25">- <strong>другим лицам</strong></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p7">1% суммы договора, но не менее 300 руб. + 2500 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p7">1% суммы договора, но не менее 300 руб. + <span className="s1">11 653</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p25">- <strong>договор дарения оружия</strong></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p7">1% суммы договора, но не менее 300 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p7">1% суммы договора, но не менее 300 руб. + <span className="s1">11 653</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td110" rowSpan={4} valign="top">
            <p className="p2"><strong>12</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p6"><strong>За удостоверение договоров об ипотеке, если данное требование установлено законодательством Российской Федерации</strong><span className="s6"><strong>&nbsp;</strong></span><strong>(пп. 4 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>67</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.); пункт&nbsp;</strong><span className="s1"><strong>16</strong></span><strong>&nbsp;ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p6">- за удостоверение договоров ипотеки долей в праве общей собственности на недвижимое имущество</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p7">200 руб. + 8000 руб. УПТХ</p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p11">8 200 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p7">200 руб. + <span className="s1">11 653</span><strong>&nbsp;</strong>руб. УПТХ</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p24">11 868<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p6">- за удостоверение договоров об ипотеке жилого помещения в обеспечение возврата кредита (займа), предоставленного на приобретение или строительство жилого дома, квартиры</p>
            </td>
            <td className="td3" valign="middle">
            <p className="p7">200 руб. + 8000 руб. УПТХ</p>
            </td>
            <td className="td4" colSpan={2} valign="middle">
            <p className="p11">8 200 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p7">200 руб. + <span className="s1">11 653</span><strong>&nbsp;</strong>руб. УПТХ</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p24">11 868<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p26">- за удостоверение договоров об ипотеке другого недвижимого имущества, за исключением морских и воздушных судов, а также судов внутреннего плавания</p>
            </td>
            <td className="td3" valign="middle">
            <p className="p7">0,3% суммы договора, но не более 3000 руб. + 8 000 руб. УПТХ</p>
            </td>
            <td className="td4" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td5" valign="middle">
            <p className="p7">0,3% суммы договора, но не более 3000 руб. + <span className="s1">11 653</span><strong><span className="Apple-converted-space">&nbsp;</span></strong> руб. УПТХ</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td111" rowSpan={2} valign="top">
            <p className="p2"><strong>13</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p6"><strong>Удостоверение договора уступки требования по договору об ипотеке жилого помещения, а также по кредитному договору и договору займа, обеспеченному ипотекой жилого помещения и договора долевого участия в строительстве (пп.7 п. 1 ст. 333.24 НК РФ;</strong><span className="s6"><strong>&nbsp;</strong></span><strong>пункт&nbsp;</strong><span className="s1"><strong>47&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ – 12 125,96 руб.); пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td112" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td113" valign="middle">
            <p className="p7">0,5% суммы договора, но не менее 300 руб. + 5000 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td114" valign="middle">
            <p className="p5"><span className="s8">0,5% суммы договора, но не менее 300 руб. +&nbsp;</span><span className="s9">11 653</span><span className="s8">&nbsp;руб. УПТХ</span></p>
            </td>
            <td className="td115" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td116" rowSpan={18} valign="top">
            <p className="p2"><strong>14</strong></p>
            </td>
            <td className="td117" colSpan={9} valign="top">
            <p className="p6"><strong>Удостоверение сделок, предмет которых не подлежит оценке и которые в соответствии с законодательством Российской Федерации должны быть нотариально удостоверены (пп. 6 п.1 ст. 333.24 НК РФ),<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>(пп.5 п.1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>47</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.; пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт 21 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>4 001, 57</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт 37 ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>5 335,42</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>53</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.; пункт 23 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>34 959</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>55</strong></span><strong>&nbsp;ФНП предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.; пункт 25 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>34 959</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>37</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>5 335, 42</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>57</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 000, 78</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>58</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 000,78</strong></span><strong>&nbsp;руб.),<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>43</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>5 335,42</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>78</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.; пункт 26 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>34 959</strong></span><strong>&nbsp;руб.;</strong></p>
            <p className="p6"><strong>пункт&nbsp;</strong><span className="s1"><strong>80</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.; пункт 27 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>34 959</strong></span><strong>&nbsp;руб. <span className="Apple-converted-space">&nbsp; &nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p27">- <strong>соглашение об определении долей вытекающего из наследственного права</strong><span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p27">(пункт <span className="s1">47</span> ФНП; пункт 18 ФНП удаленно)<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td11" valign="middle">
            <p className="p7">500 руб. + 3000 руб. УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p11">3500 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p7">500 руб. + <span className="s10">11 653</span><span className="s6"><strong><span className="Apple-converted-space">&nbsp;</span></strong></span> руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p24">12 153<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td118" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение иных договоров (соглашений) не подлежащих оценке (в том числе соглашений (договоров) об оформлении в общую долевую собственность жилого помещения приобретенного с использованием средств материнского капитала и др., удостоверение соглашения о порядке ведения переговоров, удостоверение медиативного соглашения)</strong> (пункт <span className="s1">47</span> ФНП; пункт 18 ФНП удаленно). <span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td119" valign="middle">
            <p className="p7">500 руб. + <span className="s1">6000 руб.</span> УПТХ</p>
            </td>
            <td className="td120" colSpan={2} valign="middle">
            <p className="p24">6500 руб.</p>
            </td>
            <td className="td121" valign="middle">
            <p className="p7">500 руб. + <span className="s10">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td122" valign="middle">
            <p className="p24">12 153<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение безотзывной оферты во исполнение опциона на заключение договора</strong> (пункт <span className="s1">37</span> ФНП)</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p7">500 руб. + 4000 руб. УПТХ</p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p11">4500 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение акцепта безотзывной оферты&nbsp;</strong>(пункт <span className="s1">43</span> ФНП)</p>
            </td>
            <td className="td17" valign="middle">
            <p className="p7">500 руб. + 4000 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p11">4500 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2"><strong>- удостоверение соглашения о предоставлении опциона на заключение договора&nbsp;</strong>(пункт <span className="s1">78</span> ФНП; пункт 26 ФНП удаленно)</p>
            </td>
            <td className="td123" rowSpan={4} valign="middle">
            <p className="p7">500 руб. + 29500 руб. УПТХ</p>
            </td>
            <td className="td124" colSpan={2} rowSpan={4} valign="middle">
            <p className="p11">30000 руб.</p>
            </td>
            <td className="td125" rowSpan={4} valign="middle">
            <p className="p7">500 руб. + <span className="s1">34 959</span> руб. УПТХ</p>
            </td>
            <td className="td126" rowSpan={4} valign="middle">
            <p className="p24">35 459<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2">-<strong>удостоверение соглашения об управлении хозяйственным партнерством</strong> (пункт <span className="s1">53</span> ФНП; пункт 23 ФНП удаленно)</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение договора инвестиционного товарищества</strong> (пункт <span className="s1">55</span> ФНП; пункт 25 ФНП удаленно)</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="top">
            <p className="p2">- удостоверение опционного договора (пункт <span className="s1">80</span> ФНП; пункт 27 ФНП удаленно)</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <p className="p2">- обязательство от одного родителя или от двух родителей связанное с отчуждением доли несовершеннолетних детей (пункт 21 ФНП)</p>
            </td>
            <td className="td11" valign="middle">
            <p className="p11">500 руб. + <span className="s1">1500 руб.</span> УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p11">2000 рублей<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td13" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="top">
            <p className="p28">- <strong>согласие супруга на распоряжение имуществом&nbsp;</strong>(пункт <span className="s1">58</span> ФНП)</p>
            </td>
            <td className="td127" rowSpan={6} valign="middle">
            <p className="p11">500 руб. + 1500 руб. УПТХ</p>
            </td>
            <td className="td128" colSpan={2} rowSpan={6} valign="middle">
            <p className="p11">2000 рублей</p>
            </td>
            <td className="td129" rowSpan={6} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td130" rowSpan={6} valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="top">
            <p className="p28">- <strong>согласие на приватизацию</strong><span className="Apple-converted-space">&nbsp;&nbsp;</span>(пункт 21 ФНП)</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="top">
            <p className="p28">- <strong>согласие на внесудебный порядок обращения</strong> (пункт 21 ФНП)<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="top">
            <p className="p28">- <strong>отказ совладельца от преимущественного права покупки</strong> (пункт 21 ФНП)<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p2">- <strong>оферта (не социальное)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2">- уведомление залогодателя<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p2">( должника) об исполнении обязательства, обеспеченного залогом (пункт <span className="s1">57</span> ФНП)</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- <strong>иные согласия, обязательства и т.д.</strong> (пункт 21 ФНП)</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p11">500 руб. + <span className="s1">1500 руб.</span> УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p24">2000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td108" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- <strong>согласие от юридических лиц&nbsp;</strong>(пункт 21 ФНП)</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p11">500 руб. + 2800 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p11">3300 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td131" rowSpan={4} valign="top">
            <p className="p2"><strong>15</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение соглашения об уплате алиментов (</strong><span className="s6"><strong>пп. 9</strong></span><strong>&nbsp;п. 1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>44</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>9 700,77</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>15</strong></span><strong>&nbsp;ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>9 322</strong></span><strong>&nbsp;руб.) (социально значимое нотариальное действие)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td132" colSpan={4} valign="middle">
            <p className="p2">- <strong>без передачи имущества</strong></p>
            </td>
            <td className="td133" valign="middle">
            <p className="p11">250 руб. + <span className="s1">2900 руб.</span> УПТХ</p>
            </td>
            <td className="td134" colSpan={2} valign="middle">
            <p className="p24">3150 руб.</p>
            </td>
            <td className="td135" valign="middle">
            <p className="p11">250 руб. + <span className="s1">9 322</span> руб. УПТХ</p>
            </td>
            <td className="td136" valign="middle">
            <p className="p24">9 572<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- <strong>с передачей имущества</strong><span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td105" valign="middle">
            <p className="p11">250 руб. + <span className="s1">6700 руб.</span> УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p24">6950 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">250 руб. + <span className="s1">9 322</span> руб. УПТХ</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p24">9 572<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p6"><strong>- соглашение о месте проживания ребенка при раздельном проживании родителей (пп. 6 п.1 ст. 333.24 НК РФ) не подлежит оценке<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td11" valign="middle">
            <p className="p11">500 руб. + <span className="s1">2900 руб.</span> УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p24">3400 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">500 руб. + <span className="s1">9 322</span> руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p24">9 822<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td137" rowSpan={3} valign="top">
            <p className="p2"><strong>16</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение брачного договора (пп. 10 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>48</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>15 763,75</strong></span><strong>&nbsp;руб.; пункт 20 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>15 149</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p16"><strong>- для банка</strong></p>
            </td>
            <td className="td105" valign="middle">
            <p className="p11">500 руб. + <span className="s1">5500 руб.</span> УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p24">6000 руб.<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">500 руб. + <span className="s1">15 149</span> руб. УПТХ</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p24">15 649<span className="s7">&nbsp;руб.<span className="Apple-converted-space">&nbsp;</span></span></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p16"><span className="s7"><strong><span className="Apple-converted-space">&nbsp;</span></strong></span><strong>- иные брачные договоры<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td105" valign="middle">
            <p className="p11">500 руб. + <span className="s1">14500</span> руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p24">15000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">500 руб. + <span className="s1">15 149</span> руб. УПТХ</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p24">15 649<span className="s7">&nbsp;руб.</span></p>
            </td>
            </tr>
            <tr>
            <td className="td138" rowSpan={6} valign="top">
            <p className="p2"><strong>17</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение иного договора (соглашения) не подлежащих оценке (дополнительное соглашение по материнскому капиталу, соглашение об изменении или о расторжении нотариально удостоверенного договора) (пп.12 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>47</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125, 96</strong></span><strong>&nbsp;руб.; пункт 18 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>11 653</strong></span><strong><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб.)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="top">
            <p className="p2">- иные договоры (соглашения)</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p23">200 руб. + 4800 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p11">5000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p23">200 руб. + <span className="s1">11 653</span> руб. УПТХ</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p24">11 853 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td70" colSpan={4} valign="top">
            <p className="p16">- удостоверение соглашения об изменении или расторжении нотариально удостоверенного договора (соглашения)</p>
            </td>
            <td className="td71" valign="top">
            <p className="p24"><span className="s3">200 руб. + УПТХ – взимается в размере, не превышающем размера платы за УПТХ, установленный для удостоверения такого договора (соглашения)</span></p>
            </td>
            <td className="td72" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td74" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td139" colSpan={4} valign="top">
            <p className="p2"><strong>- одной из сторон которого, является юридическое лицо</strong></p>
            </td>
            <td className="td140" valign="middle">
            <p className="p23">200 руб. + 5800 руб. УПТХ</p>
            </td>
            <td className="td141" colSpan={2} valign="middle">
            <p className="p11">6000 руб.</p>
            </td>
            <td className="td142" valign="middle">
            <p className="p23">200 руб. + <span className="s1">11 653</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td143" valign="middle">
            <p className="p24">11 853 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <p className="p2"><strong>- дополнительные соглашения по нотариальным сделкам, связанным с недвижимостью (в случае при допущении нотариусом ошибки)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td11" valign="middle">
            <p className="p12"><br /></p>
            <p className="p23">200 руб. (пп.12 п.1 ст. 333.24 НК РФ) без УПТХ</p>
            </td>
            <td className="td12" colSpan={2} valign="middle">
            <p className="p11">200 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p24">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="top">
            <p className="p2"><strong>- дополнительные соглашения по алиментным обязательствам<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td17" valign="middle">
            <p className="p11">200 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td38" colSpan={2} valign="middle">
            <p className="p11">1200 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">200 руб. + <span className="s1">11 653</span><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p24">11 853 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td144" rowSpan={3} valign="top">
            <p className="p2"><strong>18</strong></p>
            <p className="p12"><br /></p>
            <p className="p4"><br /></p>
            </td>
            <td className="td97" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение доверенности в порядке передоверия (пп.3 п. 1 ст. 333.24 НК; пункт&nbsp;</strong><span className="s1"><strong>24</strong></span><strong>&nbsp;ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 995,11</strong></span><strong>&nbsp;руб.; )</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="top">
            <p className="p2"><strong>- с физических лиц</strong></p>
            </td>
            <td className="td105" valign="top">
            <p className="p29">200 руб. + 2300 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="top">
            <p className="p11">2500 руб.</p>
            </td>
            <td className="td107" valign="top">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="top">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="top">
            <p className="p2"><strong>- от юридического лица</strong></p>
            </td>
            <td className="td105" valign="top">
            <p className="p29">200 руб. + 2800 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="top">
            <p className="p11">3000 руб.</p>
            </td>
            <td className="td107" valign="top">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="top">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td145" rowSpan={3} valign="top">
            <p className="p2"><strong>19</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение доверенности на право пользования и распоряжения имуществом (покупка, продажа, распоряжение вкладом, генеральная доверенность и т.д.) (пп.15 п. 1 ст. 333.24 НК; пункт 19 ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 000,78</strong></span><strong>&nbsp;руб. )</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- близким родственникам</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p7">100 руб. + 1900 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p11">2000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- другим физическим лицам</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p7">500 руб. + 2000 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p11">2500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td146" rowSpan={3} valign="top">
            <p className="p2"><strong>20</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение доверенностей на право пользования и (или) распоряжения автотранспортными средствами (пп. 16 п. 1 ст. 333.24 НК) (пункт 19 ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 000,78</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p28">- детям, в том числе усыновленным, супругу, родителям, полнородным братьям и сестрам</p>
            </td>
            <td className="td23" valign="middle">
            <p className="p7">250 руб. + 1750 руб. УПТХ</p>
            </td>
            <td className="td42" colSpan={2} valign="middle">
            <p className="p11">2000 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- другим физическим лицам</p>
            </td>
            <td className="td105" valign="middle">
            <p className="p7">400 руб. + 2000 руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p11">2400 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td103" rowSpan={2} valign="top">
            <p className="p11"><strong>21</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Доверенность на получение пенсий, пособий и социальных выплат, в том числе связанных с инвалидностью (освобожден на основании п. 14 ст. 333.38 НК) (пункт&nbsp;</strong><span className="s1"><strong>65</strong></span><strong>&nbsp;ФНП – предельный размер платы за оказание<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p2"><strong>УПТХ –&nbsp;</strong><span className="s1"><strong>1 333,86</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td105" valign="middle">
            <p className="p6">освобожд. + <span className="s1">500&nbsp;</span>руб. УПТХ</p>
            </td>
            <td className="td106" colSpan={2} valign="middle">
            <p className="p30">500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td108" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td147" rowSpan={12} valign="top">
            <p className="p2"><strong>22</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение прочих доверенностей (пп. 2 п. 1 ст. 333.24 НК; п.п. 6 п. 1 ст. 22.1 Основ законодательства Российской Федерации о нотариате пункт 19 ФНП – предельный размер платы за оказание УПТХ – 2 000,78 руб.; пункт&nbsp;</strong><span className="s1"><strong>25</strong></span><strong>&nbsp;ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 995,11</strong></span><strong>&nbsp;руб.)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность на ведение наследственного дела (в том числе с судебными полномочиями в рамках наследственного дела)</strong></p>
            </td>
            <td className="td148" colSpan={2} rowSpan={4} valign="middle">
            <p className="p11">200 руб. + 1800 руб. УПТХ</p>
            </td>
            <td className="td149" rowSpan={4} valign="middle">
            <p className="p11">2000 руб.<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td150" rowSpan={4} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td151" rowSpan={4} valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность на регистрацию права</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td112" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность от имени индивидуального предпринимателя,<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td152" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность для кадастровых инженеров</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность на получение зарплаты, алиментов, документов, корреспонденции и т.д.</strong></p>
            </td>
            <td className="td153" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 800 руб. УПТХ</p>
            </td>
            <td className="td154" valign="middle">
            <p className="p11">1000 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td155" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td156" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенности прочие, в том числе на получение визы и т.д.</strong></p>
            </td>
            <td className="td157" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 1300 руб. УПТХ</p>
            </td>
            <td className="td158" valign="middle">
            <p className="p11">1500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td159" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td160" colSpan={4} rowSpan={2} valign="middle">
            <p className="p2"><strong>- доверенность на газификацию<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td157" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 1300 руб. УПТХ</p>
            </td>
            <td className="td158" valign="middle">
            <p className="p11">1500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td159" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 1800 руб. УПТХ <strong>с иными полномочиями</strong><span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td162" valign="middle">
            <p className="p11">2000 руб.</p>
            </td>
            <td className="td114" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td163" colSpan={4} rowSpan={2} valign="middle">
            <p className="p2"><strong>- доверенность судебная</strong></p>
            </td>
            <td className="td164" colSpan={2} valign="middle">
            <p className="p23">200 руб. + <span className="s1">1800 руб.&nbsp;</span>УПТХ</p>
            </td>
            <td className="td165" valign="middle">
            <p className="p24">2000 руб.</p>
            </td>
            <td className="td166" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td167" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td168" colSpan={2} valign="middle">
            <p className="p23">200 руб. + <span className="s1">2000 руб.&nbsp;</span>УПТХ <strong>с иными полномочиями</strong></p>
            </td>
            <td className="td16" valign="middle">
            <p className="p24">2200 руб.</p>
            </td>
            <td className="td114" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td112" colSpan={4} valign="middle">
            <p className="p2"><strong>- доверенность от юридического лица&nbsp;</strong>(пункт <span className="s1">25</span> ФНП)</p>
            </td>
            <td className="td168" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 2800 руб. УПТХ</p>
            </td>
            <td className="td162" valign="middle">
            <p className="p11">3000 руб.</p>
            </td>
            <td className="td114" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td115" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td169" rowSpan={2} valign="top">
            <p className="p11"><strong>23</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>Распоряжение об отмене доверенности юридическим лицом, лицом выдавшим её, или одним из лиц выдавших доверенность совместно (пп.6 п. 1 ст. 333.24 НК РФ; пункт 20 ФНП – предельный размер платы за оказание УПТХ – <span className="Apple-converted-space">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></strong><span className="s1"><strong>1 333,86&nbsp;</strong></span><strong>руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p23">500 + <span className="s1">1300 руб.</span> УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p24">1 800 руб.</p>
            <p className="p11">(с каждого лица)</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td170" rowSpan={5} valign="top">
            <p className="p11"><strong>24</strong></p>
            </td>
            <td className="td171" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение завещания, принятие закрытого завещания, завещания предусматривающего создание наследственного фонда, совместного завещания супругов (пп. 13 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>26</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 667,71</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>33</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ -&nbsp;</strong><span className="s1"><strong>3 031,49</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>68</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>18 188,94</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>70</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>4 001,57</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение завещания</strong> (пункт <span className="s1">26</span> ФНП) (социально значимое нотариальное действие)</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p23">100 руб. + <span className="s1">2600 руб.</span> УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p24">2700 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2"><strong>- принятие закрытого завещания</strong> (пункт <span className="s1">33</span> ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">100 руб. + 2900 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">3000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2"><strong>- удостоверение завещания предусматривающего создание наследственного фонда (п.2 ст. 123.20-1 ГК РФ вступило в силу с 01.09.2018 г.)</strong> (пункт <span className="s1">68&nbsp;</span>ФНП)</p>
            </td>
            <td className="td174" colSpan={2} valign="middle">
            <p className="p23">100 руб. + 7000 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">7100 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- удостоверение совместного завещания супругов<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p2">(пункт <span className="s1">70</span> ФНП)</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p23">100 руб. + <span className="s1">4000 руб.</span> УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p24">4100 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p11"><strong>25</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Вскрытые конверта с закрытым завещанием и оглашение закрытого завещания (пп. 14 п.1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>34</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>3 031,49</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">300 руб. + 2900 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">3200 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td176" rowSpan={2} valign="top">
            <p className="p11"><strong>26</strong></p>
            </td>
            <td className="td177" colSpan={9} valign="middle">
            <p className="p2"><strong>Распоряжение об отмене завещания (пп.6 п. 1 ст. 333.24 НК РФ; пункт 11 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>606,30</strong></span><strong>&nbsp;руб.).</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">500 руб. + 500 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">1 000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p2"><strong>27</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Выдача дубликата (пп. 25 п. 1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>31</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p16"><strong>3 637,79</strong><span className="s7"><strong>&nbsp;руб.)</strong></span></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">100 руб. + 2900 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">3 000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td178" rowSpan={3} valign="top">
            <p className="p2"><strong>28</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p6"><strong>За свидетельствование верности копии документов и выписок из них (пп. 9 п.1 ст. 22.1 ОЗН; пункт 3 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>97,01</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>85</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>60,63</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td179" colSpan={4} valign="middle">
            <p className="p16"><strong>Копии документов</strong></p>
            <p className="p16"><strong><span className="Apple-converted-space">&nbsp;</span>и выписок из них (в том числе выписок из&nbsp;</strong>паспорта, иного документа, устанавливающего личность, военного билета, трудовой книжки, загранпаспорта, вида на жительство)</p>
            </td>
            <td className="td180" colSpan={2} valign="middle">
            <p className="p7">10 руб. + 90 руб. - за техническую работу (за каждую страницу документа)</p>
            </td>
            <td className="td181" valign="middle">
            <p className="p11">100 руб. за каждую страницу документа</p>
            </td>
            <td className="td182" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td183" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p2">Копия паспорта, иного документа, устанавливающего личность, военного билета, трудовой книжки, загранпаспорта, вида на жительство.</p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p11">10 руб. за страницу + до 280 руб. – за услуги технического характера</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p11">не более<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p11">500 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td186" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p16">Выдача выписки из реестра распоряжений об отмене доверенностей, за исключением нотариально удостоверенных доверенностей (пункт 85 ФНП)</p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p24">10 руб. + 60 руб.</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p24">70 руб. за каждую страницу выписки</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td103" rowSpan={2} valign="top">
            <p className="p2"><strong>29</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p6"><strong>За удостоверение учредительных документов (копии учредительных документов) организаций<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p6"><strong>(пп. 8 п. 1 ст. 333.24 НК РФ; пункт 3 ФНП - предельный размер платы за оказание УПТХ -&nbsp;</strong><span className="s1"><strong>97,01</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p11">500 руб. + 90 руб.<span className="Apple-converted-space">&nbsp;&nbsp;</span>– за услуги технического характера (подшив)</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">590 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td188" rowSpan={3} valign="top">
            <p className="p11"><strong>30</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>За хранение документов и выдачу копий документов, переданных нотариусу на хранение (пп. 12 п.1 ст. 22.1 ОЗН; пункт 5 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>97,01</strong></span><strong>&nbsp;руб. пункт&nbsp;</strong><span className="s1"><strong>66</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 425,19</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td179" colSpan={4} valign="middle">
            <p className="p2"><strong>- хранение документов&nbsp;</strong>(пункт 5 ФНП)</p>
            </td>
            <td className="td180" colSpan={2} valign="middle">
            <p className="p11">20 руб. за каждый день хранения + 80 руб. – за услуги правового и технического характера за каждый день хранения каждых полных или неполных 250 листов документов</p>
            </td>
            <td className="td181" valign="middle">
            <p className="p11">100 руб. за каждый день хранения</p>
            </td>
            <td className="td182" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td183" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p2"><strong>- выдача копий документов, переданных нотариусу на хранение&nbsp;</strong>(пункт 66 ФНП)</p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p11">10 руб. + 90 руб. - за техническую работу (за каждую страницу документа)</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p11">100 руб. за каждую страницу документа</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td188" rowSpan={3} valign="top">
            <p className="p11"><strong>31</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p6"><strong>За принятие на хранение электронного документа (пакета электронных документов) объемом до 1 мегабайта включительно, за выдачу принятого на хранение электронного документа (пакета электронных документов) (пп. 12.15, 12.16 п.1 ст. 22.1 ОЗН; пункт 4 ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>117</strong></span><strong>&nbsp;руб.; пункт 5 ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>117&nbsp;</strong></span><strong>руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p2"><strong>- за принятие на хранение электронного документа (пакета электронных документов) объемом до 1 мегабайта включительно (пункт 4 ФНП удаленно)</strong></p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">5 руб. за полный (неполный) год хранения, но не менее 200 руб. + <span className="s1">117</span> руб. УПТХ</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2"><strong>- за выдачу принятого на хранение электронного документа (пакета электронных документов (пункт 5 ФНП удаленно)</strong></p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">200 руб. + <span className="s1">117</span> руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11"><span className="s1">317</span> руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td190" rowSpan={14} valign="top">
            <p className="p2"><strong>32</strong></p>
            </td>
            <td className="td171" colSpan={9} valign="middle">
            <p className="p2"><strong>За свидетельствование подлинности подписи на (пп. 21 п. 1 ст. 333.24 НК РФ; пп. 10 п. 1 ст. 22.1 ОЗН; пункт 13 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 212,60</strong></span><strong>&nbsp;руб.; пункт 18 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 818,89</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>79</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 212,60</strong></span><strong>&nbsp;руб.; пункт 83 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 425,19</strong></span><strong>&nbsp;руб.; пункт 84 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>3 637,79</strong></span><strong>&nbsp;руб.;)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p28">- подготовка проектов заявлений в наследственное дело, необходимых для выдачи свидетельств о праве на наследство (пункт <span className="s1">79</span> ФНП)</p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 400 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">500 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td191" colSpan={4} valign="middle">
            <p className="p28">- заявление об отказе от наследства по любому основанию, о выдаче свидетельства о праве на наследство, о выдаче свидетельства о праве собственности пережившему супругу, на розыск информации, иные заявления наследников (в рамках наследственного дела)</p>
            <p className="p28">(пункт 13 ФНП)</p>
            </td>
            <td className="td192" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 400 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td193" valign="middle">
            <p className="p11">500 руб.</p>
            </td>
            <td className="td194" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td195" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p28">- <strong>заявлении об отказе от наследства и о принятии наследства направляемые другому нотариусу</strong> (пункт 13 ФНП)</p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p24"><span className="s7">100 руб. +&nbsp;</span>1200 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p24">1300 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td196" colSpan={4} valign="middle">
            <p className="p28">- <strong>заявлении о взаиморасчетах по ранее заключенной сделке</strong> (пункт 13 ФНП)</p>
            </td>
            <td className="td197" colSpan={2} valign="middle">
            <p className="p24"><span className="s7">100 руб. +&nbsp;</span>1200 руб. УПТХ</p>
            </td>
            <td className="td198" valign="middle">
            <p className="p24">1 300 руб.</p>
            </td>
            <td className="td199" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td200" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td201" colSpan={4} valign="middle">
            <p className="p28">- заявлении о вызове нотариуса в ИВС, больницы, тубдиспансеры, военные части и подобное.<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td202" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 1200 руб. УПТХ</p>
            </td>
            <td className="td203" valign="middle">
            <p className="p11">1 300 руб.</p>
            </td>
            <td className="td204" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td205" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td206" colSpan={4} valign="middle">
            <p className="p28">- <strong>заявлении о вызове нотариуса на дом, заявление о залоге движимого имущества, выдача дубликатов</strong> (пункт 13 ФНП)</p>
            </td>
            <td className="td207" colSpan={2} rowSpan={2} valign="middle">
            <p className="p11">100 руб. + 400 руб. УПТХ</p>
            </td>
            <td className="td208" rowSpan={2} valign="middle">
            <p className="p11">500 руб.</p>
            </td>
            <td className="td209" rowSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td210" rowSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p28">- <strong>заявлении на государственную регистрацию сделки (права)</strong> (пункт 13 ФНП)</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p28">-<strong>заявлении о регистрации по месту жительства гражданина и снятия с регистрационного учета</strong> (пункт 13 ФНП)</p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p24"><span className="s7">100 руб. +&nbsp;</span>1200 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p24">1300 руб.</p>
            </td>
            <td className="td13" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td14" valign="top">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p28">- <strong>иные заявления от физ лиц, в том числе индивидуальных предпринимателей (банкротство, залог и т.д.)</strong> (пункт 13 ФНП)</p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p24"><span className="s7">100 руб. +&nbsp;</span>1200 руб. УПТХ</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p24">1300 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p12"><br /></p>
            <p className="p13"><br /></p>
            <p className="p13"><br /></p>
            <p className="p13"><br /></p>
            <p className="p13"><br /></p>
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <p className="p2">- <strong>свидетельствование подлинности подписи представителя юридического лица (на банковских карточках)</strong> (пункт 18 ФНП)</p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 800 рублей УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">1 000 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td14" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="top">
            <p className="p2">- <strong>свидетельствование подлинности подписи представителя юридического лица (иные заявления, в том числе в органы МИФНС)</strong> (пункт 18 ФНП)</p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p23">200 руб. + 1500 руб. УПТХ</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p11">1 700 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td6" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td191" colSpan={4} valign="middle">
            <p className="p31">- <strong>свидетельствование подлинности подписи на заявлении о государственной регистрации физического лица в качестве индивидуального предпринимателя и последующее представление соответствующих документов в регистрирующий орган в рамках одного нотариального действия.</strong> (пункт 84 ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td192" colSpan={2} valign="middle">
            <p className="p11">100 руб. + <span className="s1">2 900 руб.</span> УПТХ</p>
            </td>
            <td className="td193" valign="middle">
            <p className="p24">3000 руб.</p>
            </td>
            <td className="td194" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td195" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td211" colSpan={4} valign="top">
            <p className="p32"><strong>- свидетельствование подлинности подписи последнего из заявителей на заявлении о государственной регистрации юридического лица при создании и последующее представление соответствующих документов в регистрирующий орган в рамках одного нотариального действия.</strong> (пункт 84 ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td212" colSpan={2} valign="middle">
            <p className="p23">200 руб. + <span className="s1">3 600 руб.&nbsp;</span>УПТХ</p>
            </td>
            <td className="td33" valign="middle">
            <p className="p24">3 800 руб.</p>
            </td>
            <td className="td213" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td214" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td215" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td191" colSpan={4} valign="middle">
            <p className="p31">- <strong>свидетельствование подлинности подписи на заявлении об осуществлении государственного кадастрового учета и (или) государственной регистрации прав физ. лиц и последующее представление соответствующих документов в регистрирующий орган в рамках одного нотариального действия.</strong> (пункт 83 ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td192" colSpan={2} valign="middle">
            <p className="p11">100 руб. + <span className="s1">2 000 руб.</span> УПТХ</p>
            </td>
            <td className="td193" valign="middle">
            <p className="p24">2 100 руб.</p>
            </td>
            <td className="td194" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td195" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td215" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td191" colSpan={4} valign="middle">
            <p className="p33"><strong>- свидетельствование подлинности подписи на заявлении об осуществлении государственного кадастрового учета и (или) государственной регистрации прав юр. лиц и последующее представление соответствующих документов в регистрирующий орган в рамках одного нотариального действия.</strong> (пункт 83 ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td192" colSpan={2} valign="middle">
            <p className="p11">200 руб. + <span className="s1">2 400 руб.</span> УПТХ</p>
            </td>
            <td className="td193" valign="middle">
            <p className="p24">2 600 руб.</p>
            </td>
            <td className="td194" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td195" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td216" rowSpan={4} valign="top">
            <p className="p2"><strong>33</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="top">
            <p className="p2"><strong>Свидетельствование подлинности подписи переводчика и верности перевода документа с одного языка на другой язык (нотариусом) (пп. 18 п. 1 ст. 333.24 НК РФ; пункт 10 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>606,30</strong></span><strong>&nbsp;руб.; пункт 14 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 212,60</strong></span><strong>&nbsp;руб.; пункт 7 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>1 165</strong></span><strong>&nbsp;руб.)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 900 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">1000 руб., если документ переведен нотариусом</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">100 руб. + <span className="s1">1165</span> руб. УПТХ</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11"><span className="s1">1265&nbsp;</span>руб., если документ переведен нотариусом</p>
            </td>
            </tr>
            <tr>
            <td className="td217" colSpan={3} rowSpan={2} valign="top">
            <p className="p34"><strong>свидетельствование подлинности подписи переводчика</strong> (пункт 10 ФНП):</p>
            </td>
            <td className="td218" valign="top">
            <p className="p35">если документ изготовлен нотариусом</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 900 руб. УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">1000 руб.,<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td219" valign="top">
            <p className="p35">если документ изготовлен не нотариусом</p>
            </td>
            <td className="td220" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 400 руб. УПТХ</p>
            </td>
            <td className="td221" valign="middle">
            <p className="p11">500 руб.,</p>
            </td>
            <td className="td222" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td223" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p2"><strong>34</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Представление документов в МИФНС на государственную регистрацию юр. лиц и ИП (пп. 12.8 п.1 ст. 22.1 ОЗН; пункт 8 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 333,86</strong></span><strong><span className="Apple-converted-space">&nbsp;&nbsp;</span>руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p36">1000 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">2000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td137" rowSpan={3} valign="top">
            <p className="p2"><strong>35</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Передача документов физических и юридических лиц другим физическим и юридическим лицам в соответствии со ст. 86 ОЗН; (пп.13 п.1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>29</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 667,71</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- физические лица</p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p7">100 руб. + 900 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">1 000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- юридические лица</p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p7">100 руб. + 1900 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">2 000 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p2"><strong>36</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p6"><strong>Передача сведений, которые содержатся в заявлениях физических лиц и юридических лиц, в Единый федеральный реестр сведений о банкротстве, а также в Единый федеральный реестр сведений о фактах деятельности юридических лиц (п. 13 ОЗН, пункт 17 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 818,89</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td224" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 1400 руб. УПТХ</p>
            </td>
            <td className="td225" valign="middle">
            <p className="p11">1500 руб.</p>
            </td>
            <td className="td101" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td102" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p2"><strong>37</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p6"><strong>Передача электронных документов при обращении удаленно физических или юридических лиц с заявлением о передаче электронных документов другим физическим или юридическим лицам (п. 13 ОЗН, пункт 3 ФНП - предельный размер платы за оказание УПТХ удаленно – 117 руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td224" colSpan={2} valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td225" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td101" valign="middle">
            <p className="p11">100 руб. + 117 руб. УПТХ</p>
            </td>
            <td className="td102" valign="middle">
            <p className="p11">217 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td175" rowSpan={2} valign="top">
            <p className="p2"><strong>38</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Внесение сведений в реестр списков участников ООО единой информационной системы нотариата (пп. 12.11 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>64</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 212,60</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">600 руб. +1000 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">1600 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td226" rowSpan={2} valign="top">
            <p className="p2"><strong>39</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Выдача выписки из реестра списков участников ООО единой информационной системы нотариата за каждую страницу выписки (пп. 12.12 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>62&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>60,63</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td227" colSpan={2} valign="middle">
            <p className="p23">40 руб. за каждую страницу выписки в пределах первой-десятой страниц включительно, 20 руб. за каждую страницу выписки начиная с одиннадцатой страницы + 50 руб. УПТХ за каждую страницу выписки</p>
            </td>
            <td className="td228" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td229" rowSpan={3} valign="top">
            <p className="p2"><strong>40</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>За выдачу свидетельства о праве собственности на долю в общем имуществе пережившему супругу (пп.11 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>35&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>7 275,58</strong></span><strong>&nbsp;руб.) (социально значимое нотариальное действие)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2">- <strong>на недвижимое имущество</strong></p>
            </td>
            <td className="td187" colSpan={2} valign="top">
            <p className="p7">200 руб. + 2800 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">3000 руб.</p>
            <p className="p11">(за каждый объект недвижимости)</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2">- <strong>на движимое имущество</strong></p>
            </td>
            <td className="td172" colSpan={2} valign="top">
            <p className="p7">200 руб. + 1100 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">1300 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td230" rowSpan={11} valign="top">
            <p className="p2"><strong>41</strong></p>
            </td>
            <td className="td231" colSpan={9} valign="top">
            <p className="p2"><strong>За выдачу свидетельства о праве на наследство по закону и по завещанию (пп. 22 п. 1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>28</strong></span><strong>&nbsp;ФНП – предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>3 637,79</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>40&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>8 488,17</strong></span><strong>&nbsp;руб.) (социально значимое нотариальное действие) (пункт&nbsp;</strong><span className="s1"><strong>76</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p28">- <strong>детям, в том числе усыновленным, супругу, родителям, полнородным братьям и сестрам наследодателя</strong> (пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td232" colSpan={3} valign="middle">
            <p className="p11">0,3% стоимости наследуемого имущества, но не более 100000 руб.</p>
            </td>
            <td className="td233" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2">- <strong>другим наследникам</strong> (пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td234" colSpan={3} valign="middle">
            <p className="p11">0,6% стоимости наследуемого имущества, но не более</p>
            <p className="p11">1 000000 руб.</p>
            </td>
            <td className="td235" colSpan={2} valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p28">- <strong>выдача свидетельства на денежный вклад</strong> (п. 5 ст. 333.38 НК РФ) (пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p11">освоб.+ 200 руб. УПТХ (до 100&nbsp;000 руб.); если<span className="Apple-converted-space">&nbsp;&nbsp;</span>вклад свыше 100000 руб., то за УПТХ взимается 0,3% от суммы денежного вклада, но не более 3200 руб.<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td185" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p28">- <strong>выдача свидетельства о праве на наследство на пенсию и ЕДВ (п. 5 ст. 333.38 НК РФ)</strong> (пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p11">освоб. + 200 руб. УПТХ</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p11">200 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p28">- <strong>выдача свидетельства о праве на наследство на акции, автомобиль&nbsp;</strong>(пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p11">% + 2000 руб. УПТХ (плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p11">% + 2 000 руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p28"><strong>- выдача свидетельства о праве на наследство на оружие&nbsp;</strong>(пункт <span className="s1">28</span> ФНП)</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p11">% + 1000 руб. УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">% + 1000 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td236" rowSpan={2} valign="middle">
            <p className="p16"><strong>- выдача свидетельства о праве на наследство на недвижимое имущество&nbsp;</strong>(пункт 40 ФНП)</p>
            </td>
            <td className="td237" colSpan={3} valign="middle">
            <p className="p37">родителям, детям, супругу</p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p24">% + 3500 руб. УПТХ</p>
            <p className="p24">(плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p24">% + 3500 руб.</p>
            </td>
            <td className="td25" rowSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td26" rowSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td237" colSpan={3} valign="middle">
            <p className="p37">братьям, сестрам и иным наследникам</p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p24">% + 4300 руб. УПТХ</p>
            <p className="p24">(плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p24">% + 4300 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p28"><span className="s11"><strong>- выдача свидетельства о праве на наследство на доли в ООО&nbsp;</strong>(пункт&nbsp;</span><span className="s12">28&nbsp;</span><span className="s11">ФНП)</span></p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p11">% + <span className="s1">3600 руб.</span> УПТХ</p>
            <p className="p11">(плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td22" valign="middle">
            <p className="p11">% + <span className="s1">3600&nbsp;</span>руб.</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p28"><strong>- выдача свидетельства о праве на наследство на иное имущество, помимо недвижимого (за каждый объект)&nbsp;</strong>(пункт <span className="s1">28</span> ФНП)<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p4"><br /></p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p11">% + <span className="s1">3200&nbsp;</span>руб. УПТХ</p>
            <p className="p11">(плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p11">% + <span className="s1">3200</span> руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td186" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p28"><strong>- выдача свидетельства о праве на наследство по завещанию, предусматривающему создание наследственного фонда (пункт&nbsp;</strong><span className="s1"><strong>76&nbsp;</strong></span><strong>ФНП)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p11">% + <span className="s1">6000&nbsp;</span>руб. УПТХ</p>
            <p className="p11">(плата за УПТХ взимается за каждый объект с каждого наследника)</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">% + <span className="s1">6000</span> руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td238" rowSpan={5} valign="top">
            <p className="p2"><strong>42</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p2"><strong>Меры по охране наследства (пп. 23 п. 1 ст. 333.24 НК РФ;</strong> <strong>пункт&nbsp;</strong><span className="s1"><strong>71</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –<span className="Apple-converted-space">&nbsp;&nbsp;</span></strong><span className="s1"><strong>6 062,98</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>72</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>6 062,98</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>73</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>7 275,58</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>50</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>36 377,88</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>75</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p38"><strong>- составление описи наследственного имущества&nbsp;</strong>(пункт <span className="s1">71</span> ФНП)<strong><span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p11">600 руб. + 3700 руб. УПТХ (за каждый час)</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">4300 руб. - за каждый час</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td70" colSpan={4} valign="middle">
            <p className="p38"><strong>- передача нотариусом на хранение входящего в состав наследственного имущества, не требующего управления, наследникам либо иным лицам (по договору хранения)</strong>(пункт <span className="s1">72</span> ФНП)</p>
            </td>
            <td className="td239" colSpan={2} valign="middle">
            <p className="p11">600 руб. + 4400 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td240" valign="middle">
            <p className="p11">5000 руб.</p>
            </td>
            <td className="td73" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td74" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td241" colSpan={4} valign="middle">
            <p className="p38"><strong>- принятие в публичный депозитный счет нотариуса входящих в состав наследства наличных денежных средств<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p38">(пункт <span className="s1">73</span> ФНП)</p>
            </td>
            <td className="td242" colSpan={2} valign="middle">
            <p className="p11">до 50 000 руб. наличных денежных<span className="Apple-converted-space">&nbsp;&nbsp;</span>средств входящих<span className="Apple-converted-space">&nbsp;&nbsp;</span>в состав наследства - 600 руб. без взимания за услуги правового и технического характера свыше 50 001 руб. наличных денежных<span className="Apple-converted-space">&nbsp;&nbsp;</span>средств входящих<span className="Apple-converted-space">&nbsp;&nbsp;</span>в состав наследства - 600 руб. + 4400 руб. УПТХ</p>
            </td>
            <td className="td28" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td47" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td48" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p38">- <strong>доверительное управление наследственным имуществом&nbsp;</strong>(пункт <span className="s1">50</span> ФНП)</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p11">600 руб. + 15400 руб. УПТХ</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">16000 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td145" valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td179" colSpan={4} valign="middle">
            <p className="p38"><strong>- передача входящих в состав наследства валютных ценностей, драгоценных металлов и камней, изделий из них и не требующих управления ценных бумаг банку на хранение (пункт&nbsp;</strong><span className="s1"><strong>75&nbsp;</strong></span><strong>ФНП)</strong></p>
            </td>
            <td className="td180" colSpan={2} valign="middle">
            <p className="p11">600 руб. + 4400 руб. УПТХ<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td181" valign="middle">
            <p className="p11">5000 руб.</p>
            </td>
            <td className="td182" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td183" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td243" rowSpan={10} valign="top">
            <p className="p11"><strong>43</strong></p>
            </td>
            <td className="td171" colSpan={9} valign="middle">
            <p className="p2"><strong>Совершение прочих нотариальных действий, для которых законодательством Российской Федерации предусмотрена обязательная нотариальная форма (пп. 26 п. 1 ст. 333.24 НК РФ; пункт 22 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 425,19</strong></span><strong>&nbsp;руб.; пункт 23 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 425,19</strong></span><strong>&nbsp;руб.;</strong><span className="s6"><strong>&nbsp;</strong></span><strong>пункт 15 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2 000,78</strong></span><strong>&nbsp;руб.; пункт 87 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>2000,78</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td244" colSpan={4} valign="top">
            <p className="p28">- <strong>согласие законных представителей, опекунов, попечителей на выезд несовершеннолетних детей за границу,</strong> <strong>в том числе и по территории России</strong> (пункт 15 ФНП) (социально значимое нотариальное действие)</p>
            </td>
            <td className="td245" colSpan={2} valign="middle">
            <p className="p24"><span className="s7">100 руб. +&nbsp;</span>1400 руб. УПТХ<span className="s7"><span className="Apple-converted-space">&nbsp;</span></span></p>
            </td>
            <td className="td246" valign="middle">
            <p className="p2"><span className="s1">1500 руб.</span> – от одного родителя;</p>
            <p className="p2">2000 руб. от двоих родителей</p>
            </td>
            <td className="td247" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td248" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td70" colSpan={4} valign="top">
            <p className="p28">- <strong>согласие родителей на сдачу экзаменов в ГИБДД (пункт&nbsp;</strong><span className="s1"><strong>87&nbsp;</strong></span><strong>ФНП)</strong></p>
            </td>
            <td className="td249" colSpan={2} valign="middle">
            <p className="p11">100 руб. + 1400 руб. УПТХ</p>
            </td>
            <td className="td240" valign="middle">
            <p className="p2">1500 руб. – от одного родителя;<span className="Apple-converted-space">&nbsp;</span></p>
            <p className="p2">2000 руб. от двоих родителей</p>
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td74" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2"><strong>- согласие на усыновление (удочерение) (</strong><span className="s1"><strong>пункт 87 ФНП)</strong></span></p>
            </td>
            <td className="td250" colSpan={2} rowSpan={5} valign="middle">
            <p className="p23">100 руб. + 1900 руб. УПТХ</p>
            </td>
            <td className="td251" rowSpan={5} valign="middle">
            <p className="p11">2000 руб.</p>
            </td>
            <td className="td252" rowSpan={5} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td253" rowSpan={5} valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- согласие на приобретение и отказ от гражданства&nbsp;</strong><span className="s1"><strong>(пункт 87 ФНП)</strong></span></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- согласие от собственника на регистрацию по месту жительства&nbsp;</strong><span className="s1"><strong>(пункт 87 ФНП)</strong></span></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p2"><strong>- выдача прочих нотариальных свидетельств</strong> (пункт 23 ФНП)</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение прочих нотариальных действий (пункт 22 ФНП)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- постановление о возмещении расходов на похороны наследодателя (пункт 22 ФНП)</strong></p>
            </td>
            <td className="td254" colSpan={2} rowSpan={3} valign="middle">
            <p className="p39"><span className="s7">100 руб. +&nbsp;</span>900 руб. УПТХ</p>
            </td>
            <td className="td255" rowSpan={3} valign="middle">
            <p className="p24">1000 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td40" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2">- <strong>удостоверение факта нахождения гражданина в живых</strong> (пункт 23 ФНП)</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td256" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p2"><strong>- удостоверение времени предъявления документов 22 пункт</strong></p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td109" rowSpan={2} valign="top">
            <p className="p11"><strong>44</strong></p>
            </td>
            <td className="td171" colSpan={9} valign="middle">
            <p className="p2"><strong>Принятие в депозит нотариуса денежных сумм или ценных бумаг до пяти кредиторов (пп. 8 п. 1 ст. 22.1 ОЗН; пункт 12 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>7 275,58 + 1 212, 60</strong></span><strong>&nbsp;руб. - за каждого последующего кредитора, начиная с шестого - 0,1 - коэффициент сложности нотариального действия; пункт&nbsp;</strong><span className="s1"><strong>13&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ удаленно – 6 992 + 1 165 руб. - за каждого последующего кредитора, начиная с шестого - 0,1 - коэффициент сложности нотариального действия.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td60" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td227" colSpan={2} valign="middle">
            <p className="p7">0,5 % от принятой денежной суммы или рыночной стоимости ценных бумаг, но не менее 1000 рублей + 4500 руб. УПТХ + 1000 руб. - за каждого последующего кредитора, начиная с шестого<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td228" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">0,5 % от принятой денежной суммы или рыночной стоимости ценных бумаг, но не менее 1000 рублей + 6992 руб. УПТХ + 1165 руб. - за каждого последующего кредитора, начиная с шестого</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td109" rowSpan={2} valign="top">
            <p className="p11"><strong>45</strong></p>
            </td>
            <td className="td36" colSpan={9} valign="middle">
            <p className="p2"><strong>Принятие в депозит денежных сумм или ценных бумаг, если такое принятие обязательно в соответствии с законодательством Российской Федерации (пп. 20 п. 1 ст. 333.24 НК РФ; пункт 12 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>7 275,58 + 1 212, 60</strong></span><strong>&nbsp;руб. - за каждого последующего кредитора, начиная с шестого - 0,1 - коэффициент сложности нотариального действия)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td55" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td254" colSpan={2} valign="middle">
            <p className="p7">0,5 % от принятой денежной суммы или рыночной стоимости ценных бумаг, но не менее 20 рублей и не более 20000 руб. + 4500 руб. - за услуги правового характера + 1000 руб. - за каждого последующего кредитора, начиная с шестого</p>
            </td>
            <td className="td255" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td58" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td59" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td103" rowSpan={2} valign="top">
            <p className="p11"><strong>46</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>За принятие в депозит нотариуса, удостоверившего сделку, денежных сумм в целях исполнения обязательств по такой сделке (пп. 8.1 п. 1 ст. 22.1 ОЗН; пункт 16 ФНП - предельный размер платы за оказание УПТХ – 1 261,49 руб.; пункт 8 ФНП предельный размер платы за оказание УПТХ удаленно – 1 147 руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p3">1500 руб.<span className="s13"><span className="Apple-converted-space">&nbsp;</span></span> + 1000 руб. УПТХ.<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td173" valign="middle">
            <p className="p6">2500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">1500 руб.<span className="s13"><span className="Apple-converted-space">&nbsp;</span></span> + 1147 руб. УПТХ.</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">2647 руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td170" rowSpan={3} valign="top">
            <p className="p2"><strong>47</strong></p>
            </td>
            <td className="td257" colSpan={9} valign="middle">
            <p className="p2"><strong>Обеспечение доказательств - за каждую страницу протокола (протокол допроса свидетеля, производство осмотра письменных и вещественных доказательств, назначение экспертизы, протокол осмотра информационного ресурса опубликованного в электронном виде (интернет, СМС сообщений сотовой связи и т.д.) (пп. 12.6 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>27</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>3 637,79</strong></span><strong>&nbsp;руб., пункт&nbsp;</strong><span className="s1"><strong>9&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>3 496</strong></span><strong>&nbsp;руб.; пункт 6 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>133, 39</strong></span><strong>&nbsp;руб.; пункт 6 ФНП предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>128</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td70" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td239" colSpan={2} valign="middle">
            <p className="p7">3000 руб. + <span className="s1">3600</span> руб. УПТХ (за одну страницу)</p>
            <p className="p7">свыше одной страницы за каждую следующую страницу протокола + 1000 руб. УПТХ</p>
            </td>
            <td className="td240" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p7"><span className="Apple-converted-space">&nbsp;</span>3000 руб. + <span className="s1">3496</span> руб. УПТХ (за одну страницу)</p>
            <p className="p4"><br /></p>
            </td>
            <td className="td74" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p2"><strong>- за каждую страницу приложения к протоколу обеспечения доказательств</strong> (пункт 6 ФНП; пункт 6 ФНП удаленно) (скан. образ, скриншот и т.д.)</p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p39">130 руб. УПТХ</p>
            </td>
            <td className="td185" valign="middle">
            <p className="p24">130 руб.</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11"><span className="s1">128</span> руб. УПТХ</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p11"><span className="s1">128</span> руб.</p>
            </td>
            </tr>
            <tr>
            <td className="td258" rowSpan={2} valign="top">
            <p className="p2"><strong>48</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение равнозначности электронного документа документу на бумажном носителе в соответствии со ст. 103.8 ОЗН (пп. 12.4 п. 1 ст. 22.1 ОЗН; пункт 2 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>133,39</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td2" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td184" colSpan={2} valign="middle">
            <p className="p7">50 руб. - за каждую страницу документа на бумажном носителе + 100 руб. УПТХ (за каждую страницу документа на бумажном носителе)<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td185" valign="middle">
            <p className="p6">150 руб. за каждую страницу документа на бумажном носителе</p>
            </td>
            <td className="td5" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td6" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td259" rowSpan={2} valign="top">
            <p className="p2"><strong>49</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение равнозначности документа на бумажном носителе электронному документу в соответствии со ст. 103.9 ОЗН (пп.12.3 п.1 ст. 22.1 ОЗН; пункт 1 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>133,39</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td55" colSpan={4} valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td254" colSpan={2} valign="middle">
            <p className="p7">50 руб. - за каждую страницу документа на бумажном носителе + 100 руб. УПТХ (за каждую страницу документа на бумажном носителе) (диск, флешка и иные электронные носители предоставляются заявителем)</p>
            </td>
            <td className="td255" valign="middle">
            <p className="p6">150 руб. за каждую страницу документа на бумажном носителе</p>
            </td>
            <td className="td58" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td59" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td260" rowSpan={2} valign="top">
            <p className="p2"><strong>50</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="top">
            <p className="p2"><strong>Удостоверение равнозначности электронного документа, изготовленного нотариусом в ином формате, электронному документу представленному нотариусу. (пп.12.14 п.1 ст. 22.1 ОЗН; пункт 2 ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>58</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td132" colSpan={4} valign="top">
            <p className="p4"><br /></p>
            </td>
            <td className="td261" colSpan={2} valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td262" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td135" valign="middle">
            <p className="p11">60 руб. за 1 мегабайт + <span className="s1">58</span> руб. УПТХ</p>
            </td>
            <td className="td136" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td263" rowSpan={3} valign="top">
            <p className="p2"><strong>51</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Регистрация уведомления о залоге движимого имущества (пп. 12.1 п. 1 ст 22.1 ОЗН; пункт 9 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>242,52</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td179" colSpan={4} valign="middle">
            <p className="p6">- внесение сведений в уведомление о залоге движимого имущества по просьбе заявителя, обратившегося за совершением нотариального действия по регистрации уведомления о залоге движимого имущества, на личном приеме у нотариуса<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td180" colSpan={2} valign="middle">
            <p className="p23">200 руб. - за услуги технического характера (за каждую страницу уведомления представленного в бумажном виде)</p>
            </td>
            <td className="td181" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td182" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td183" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td37" colSpan={4} valign="middle">
            <p className="p6">- за свидетельство о регистрации уведомления о залоге движимого имущества</p>
            </td>
            <td className="td161" colSpan={2} valign="middle">
            <p className="p23">600 руб.</p>
            </td>
            <td className="td16" valign="middle">
            <p className="p11">600 руб.</p>
            </td>
            <td className="td39" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td40" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td111" rowSpan={2} valign="top">
            <p className="p2"><strong>52</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>За выдачу выписки из реестра уведомлений о залоге движимого имущества – (пп. 12.2 п. 1 ст. 22.1 ОЗН; пункт 4 ФНП<span className="Apple-converted-space">&nbsp;&nbsp;</span>- предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>60,63</strong></span><strong>&nbsp;руб.; пункт 1 ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>58</strong></span><strong>&nbsp;руб.</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td41" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td189" colSpan={2} valign="middle">
            <p className="p7">40 руб. + 50 руб. за услуги технического характера - за каждую страницу выписки<strong>&nbsp;</strong><span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td22" valign="middle">
            <p className="p6">90 руб. за каждую страницу выписки</p>
            </td>
            <td className="td43" valign="middle">
            <p className="p11">40 руб. + <span className="s1">58&nbsp;</span>руб. за услуги технического характера - за каждую страницу выписки<strong>&nbsp;</strong><span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td44" valign="middle">
            <p className="p11"><span className="s1">98</span> руб. за каждую страницу выписки</p>
            </td>
            </tr>
            <tr>
            <td className="td264" rowSpan={2} valign="top">
            <p className="p11"><strong>53</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>Свидетельство об удостоверении тождественности собственноручной подписи инвалида по зрению с факсимильным воспроизведением его собственноручной подписи (пп. 26 п. 1 ст. 333.24 НК РФ; пункт 7 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>121,26</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p7">100 руб. от УПТХ освобождается</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p6">100 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td265" rowSpan={6} valign="top">
            <p className="p11"><strong>54</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p2"><strong>За совершение исполнительной надписи (пп. 19 п. 1 ст. 333.24 НК РФ; пункт&nbsp;</strong><span className="s1"><strong>30</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>3 637,79</strong></span><strong>&nbsp;руб.; пункт&nbsp;</strong><span className="s1"><strong>10&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ удаленно –&nbsp;</strong><span className="s1"><strong>3 496</strong></span><strong>&nbsp;руб.;<span className="Apple-converted-space">&nbsp;</span></strong></p>
            <p className="p2"><strong>пп. 12.10 п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>38</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>6 062,98</strong></span><strong>&nbsp;руб. )</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td266" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи, за исключением исполнительной надписи об обращении взыскания на заложенное имущество (займ, и т.д.)&nbsp;</strong>(пункт <span className="s1">30</span> ФНП; пункт <span className="s1">10</span> ФНП удаленно)</p>
            </td>
            <td className="td267" colSpan={2} valign="middle">
            <p className="p11">0,5% взыскиваемой суммы, но не более 20000 руб. + 2000 руб. УПТХ</p>
            </td>
            <td className="td268" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td269" valign="middle">
            <p className="p11">0,5% взыскиваемой суммы, но не более 20000 руб. + 3 496 руб. УПТХ</p>
            <p className="p40"><br /></p>
            <p className="p41">Плата за УПТХ при совершении удаленно ИН на основании <strong>кредитного договора</strong>, <strong>договора поручительства,</strong> предусматривающего солидарную ответственность поручителя по <strong>кредитному договору</strong> или договору <strong>об оказании услуг связи</strong></p>
            <p className="p41">взыскивается в процентном отношении (с округлением до целого рубля в сторону увеличения) к размеру платы за УПТХ, взимаемой за совершение ИН, при сумме взыскания:</p>
            <p className="p41">-до 10 тыс. руб. вкл. – 5,8%</p>
            <p className="p41">-св.10 тыс. до 200 тыс. вкл.- 11,6%</p>
            <p className="p41">-св.200 тыс. до 500 тыс.вкл. — 17,43%</p>
            <p className="p41">-св.500 тыс. до 1 млн. вкл. — 49,4%</p>
            <p className="p41">-св.1 млн.- 69,75%</p>
            </td>
            <td className="td270" valign="middle">
            <p className="p4"><br /></p>
            </td>
            </tr>
            <tr>
            <td className="td45" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи об обращении взыскания на заложенное имущество (залог, ипотека и т.д.)&nbsp;</strong>(пункт <span className="s1">38</span> ФНП)</p>
            </td>
            <td className="td242" colSpan={2} valign="middle">
            <p className="p42">0,5% начальной продажной цены или (в установленных федеральным законом случаях) стоимости заложенного имущества, определенной в отчете о его оценке, но не менее 1500 рублей и не более 300 000 рублей + 5000 руб. УПТХ</p>
            </td>
            <td className="td28" valign="middle">
            <p className="p42">-</p>
            </td>
            <td className="td47" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td48" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td271" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи о взыскании денежных сумм в размере до 3000 рублей включительно или об истребовании имущества стоимостью до 3000 рублей включительно.</strong> (пункт <span className="s1">30</span> ФНП)</p>
            </td>
            <td className="td239" colSpan={2} valign="middle">
            <p className="p42">300 руб. + 300 руб. УПТХ</p>
            </td>
            <td className="td240" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td74" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td272" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи о взыскании денежных сумм в размере от 3001 рубля до 10 000 рублей включительно или об истребовании имущества стоимостью от 3001 рубля до 10 000 рублей включительно.</strong> (пункт <span className="s1">30</span> ФНП)</p>
            </td>
            <td className="td227" colSpan={2} valign="middle">
            <p className="p42">500 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td228" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td272" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи о взыскании денежных сумм в размере от<span className="Apple-converted-space">&nbsp;&nbsp;</span>10 001 рубля до 200 000 рублей включительно или об истребовании имущества стоимостью от 10 001 рубля до 200 000 рублей включительно.</strong> (пункт <span className="s1">30</span> ФНП)</p>
            </td>
            <td className="td227" colSpan={2} valign="middle">
            <p className="p42">1000 руб. + 3000 руб. УПТХ</p>
            </td>
            <td className="td228" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td63" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td64" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td144" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td70" colSpan={4} valign="middle">
            <p className="p2"><strong>- совершение исполнительной надписи о взыскании денежных сумм в размере свыше 200 000 рублей или об истребовании имущества стоимостью свыше 200 000 рублей.</strong> (пункт <span className="s1">30</span> ФНП)</p>
            </td>
            <td className="td239" colSpan={2} valign="middle">
            <p className="p42">0,5% взыскиваемой суммы или стоимости истребуемого имущества, но не менее 1500 рублей + 3600 руб. УПТХ</p>
            </td>
            <td className="td240" valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td73" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td74" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td273" rowSpan={2} valign="top">
            <p className="p11"><strong>55</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Выдача выписки из реестра регистрации нотариальных действий (пп. 9 п. 1 ст. 22.1 ОЗН пункт&nbsp;</strong><span className="s1"><strong>63&nbsp;</strong></span><strong>ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>606,30</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">10 руб. + 500 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">510 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td273" rowSpan={2} valign="top">
            <p className="p11"><strong>56</strong></p>
            </td>
            <td className="td8" colSpan={9} valign="middle">
            <p className="p6"><strong>Недополученный доход при совершении нотариальных действии вне помещения нотариальной конторы (при выезде к физическим лицам) (в том числе в ИВС, места лишения свободы, тубдиспансеры, больницы, военные части и подобное) (пункт&nbsp;</strong><span className="s1"><strong>60</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>6 062,98</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td224" colSpan={2} valign="middle">
            <p className="p23">2000 руб.</p>
            </td>
            <td className="td225" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td101" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td102" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td274" rowSpan={2} valign="top">
            <p className="p11"><strong>57</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p6"><strong>Недополученный доход при совершении нотариальных действии вне помещения нотариальной конторы (при выезде к юридическим лицам) (пункт&nbsp;</strong><span className="s1"><strong>61</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.)</strong></p>
            </td>
            </tr>
            <tr>
            <td className="td98" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td224" colSpan={2} valign="middle">
            <p className="p23">4000 руб.</p>
            </td>
            <td className="td225" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td101" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td102" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td275" rowSpan={3} valign="top">
            <p className="p11"><strong>58</strong></p>
            </td>
            <td className="td276" colSpan={9} valign="middle">
            <p className="p2"><strong>Принятие нотариусом на депонирование движимых вещей (пп. 8.2, 8.3 п. 1 ст. 22.1 ОЗН пункт&nbsp;</strong><span className="s1"><strong>69</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>18 188,94</strong></span><strong>&nbsp;руб., пункт 16 ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>1 212,60</strong></span><strong>&nbsp;руб. ) (введен ФЗ № 119 от 23.05.2018 г., вступил в силу с 01.09.2018г.)<span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td179" colSpan={4} valign="middle">
            <p className="p2">- за принятие на депонирование нотариусом движимых вещей, безналичных денежных средств или бездокументарных ценных бумаг<span className="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td className="td180" colSpan={2} valign="middle">
            <p className="p23">0,5 % принятой денежной суммы, рыночной стоимости ценных бумаг или заявленной депонентом стоимости имущества, но не менее 1000 руб. + 10000 руб. УПТХ</p>
            </td>
            <td className="td181" valign="middle">
            <p className="p23">-</p>
            </td>
            <td className="td182" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td183" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td10" colSpan={4} valign="middle">
            <p className="p2">- за принятие на депонирование денежных средств, в целях исполнения обязательств сторон по нотариально удостоверенной сделке <strong>(пункт 16 ФНП)</strong></p>
            </td>
            <td className="td187" colSpan={2} valign="middle">
            <p className="p23">1500 руб. + 1000 руб. УПТХ</p>
            </td>
            <td className="td88" valign="middle">
            <p className="p11">2500 руб.</p>
            </td>
            <td className="td13" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td14" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            <tr>
            <td className="td273" rowSpan={2} valign="top">
            <p className="p11"><strong>59</strong></p>
            </td>
            <td className="td97" colSpan={9} valign="middle">
            <p className="p2"><strong>Удостоверение факта возникновения права собственности на объекты недвижимого имущества в силу приобретательной давности (пп.12.13<span className="Apple-converted-space">&nbsp;&nbsp;</span>п. 1 ст. 22.1 ОЗН; пункт&nbsp;</strong><span className="s1"><strong>77</strong></span><strong>&nbsp;ФНП - предельный размер платы за оказание УПТХ –&nbsp;</strong><span className="s1"><strong>12 125,96</strong></span><strong>&nbsp;руб.) <span className="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            </tr>
            <tr>
            <td className="td104" colSpan={4} valign="middle">
            <p className="p4"><br /></p>
            </td>
            <td className="td172" colSpan={2} valign="middle">
            <p className="p23">1500 руб. + 5000 руб. УПТХ</p>
            </td>
            <td className="td173" valign="middle">
            <p className="p11">6500 руб.</p>
            </td>
            <td className="td107" valign="middle">
            <p className="p11">-</p>
            </td>
            <td className="td108" valign="middle">
            <p className="p11">-</p>
            </td>
            </tr>
            </tbody>
            </table>

        </div>

    );
}
export default Table;