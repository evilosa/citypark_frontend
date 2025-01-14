import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { SocShare, Breadcrumbs } from 'components'
import { HOTEL_MAIN, CATALOG } from '../../links'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'
import * as images from 'images'

export default () =>
  <div className="light">
    <Helmet title={TITLE_PREFIX + HOTEL_MAIN.TITLE} />
    {Breadcrumbs({ links: [HOTEL_MAIN] })}
    <SocShare
      link={baseUrl() + HOTEL_MAIN.URL}
      title={TITLE_PREFIX + HOTEL_MAIN.TITLE}
      image={baseUrl() + images.citypark}
    />
    <h2>Отель-люкс City Park — это в<span style={{ lineHeight: "1.5em" }}>ысококлассная гостиница в Белореченске с номерами&nbsp;</span><span style={{ lineHeight: "1.5em" }}>различных категорий.</span></h2>
    <p><strong><span style={{ lineHeight: "1.5em" }}>В гостинице 12 номеров площадью от 19 до 45 м2, все они соответствуют категории "Люкс". <br /></span></strong></p>
    <h2>
      <span style={{ lineHeight: "1.5em" }}>
        <Link to={CATALOG.URL}>
          Посмотреть каталог номеров
        </Link>
      </span>
      <strong><span style={{ lineHeight: "1.5em" }}><br /><br /></span></strong>
    </h2>
    <p>201 — одноместный номер с двуспальной кроватью, с балконом. Площадь 23 кв.м. + балкон 7 кв.м.<br />204, 304 — одноместные номера с двуспальной кроватью. Площадь 19 кв.м.&nbsp;<br />203, 206, 302, 303 — двухместные номера с двумя односпальными кроватями
      ( с возможностью сдвига). Площадь 23-25 кв.м.&nbsp;<br />202, 205, 305, 306 — двухместные номера с двуспальной кроватью евро. Площадь 23-25 кв.м.&nbsp;<br />301 — VIP-номер. Двухкомнатный (гостиная + спальня) с балконом. Площадь 45 кв.м. + балкон 7кв.м.
      Номер имеет расширенную комплектацию (ознакомиться).</p>
    <p><strong><span style={{ lineHeight: "1.5em" }}><br /></span></strong><span style={{ lineHeight: "1.5em" }}>В номерах 201 (одноместный с двуспальной кроватью) и 301 (VIP-номер, двухкомнатный) есть просторные балконы,&nbsp;</span><span style={{ lineHeight: "1.5em" }}>выходящие на кроны многолетних парковых деревьев; <br />здесь вы можете полной грудью насладиться&nbsp;чистейшим вечерним воздухом, сидя на&nbsp;плетеных стульях ручной работы.</span></p>
    <p><strong><span style={{ lineHeight: "1.5em" }}>&nbsp;</span></strong></p>
    <p><strong>Общая комплектация номеров:</strong><br />•&nbsp;сплит-система;<br />• Smart TV с функцией 3D;<br />•&nbsp;сейф;<br />•&nbsp;холодильник;<br />•&nbsp;шкаф-гардероб;<br />• прикроватные тумбы; <br />•&nbsp;журнальный столик;<br />•&nbsp;пуф;<br />•&nbsp;комод;<br />•&nbsp;внутренний
      телефон.
      <br /><br /><strong>Санузел:</strong> душевая кабинка, фен, туалетные принадлежности.</p>
    <p>&nbsp;</p>
    <p><strong style={{ lineHeight: "1.5em" }}><span style={{ lineHeight: "1.5em" }}>На всей территории РГК City Park доступен бесплатный&nbsp;Wi-fi&nbsp;</span></strong></p>
    <h3>Дополнительные услуги:</h3>
    <p>• заказ завтрака в номер (стоимость завтрака не входит в стоимость номера);<br />•&nbsp;заказ еды из ресторана City Park;<br />•&nbsp;детская кровать до 3-х лет.<br />•&nbsp;услуги прачечной и глажки (платно).</p>
    <p>&nbsp;</p>
    <h3>Правила размещения:</h3>
    <p>Номер VIP – не более четырех гостей, в остальные номера – не более двух.<br />Заселение производится по паспорту или водительскому удостоверению. <br />Оплатить можно как наличными, так и банковской картой.<br />За бронирование плата не взимается.<br />
      <strong style={{ lineHeight: "1.5em" }}>Заезд с животными запрещен.<br /></strong><strong style={{ lineHeight: "1.5em" }}>Курение в помещениях РГК City Park запрещено, штраф 1000 руб. Место для курения есть на каждом этаже.</strong></p>
    <p>&nbsp;</p>
    <h4>Забронировать номер в гостинице City Park можно по телефонам: +7-918-311-97-10, 8-800-100-24-41 (звонок по России бесплатный) или на сайте РГК City Park&nbsp;
    <a title="City Park Белореченск" href="https://cityparkvip.ru/" target="_blank" rel="noopener noreferrer">www.cityparkvip.ru</a>&nbsp;в разделе <Link to={CATALOG.URL}>"Каталог номеров"</Link>.</h4>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p align="CENTER"><span>ИНФОРМАЦИЯ ОБ ИСПОЛНИТЕЛЕ И О ПРЕДОСТАВЛЯЕМЫХ ИСПОЛНИТЕЛЕМ ГОСТИНИЧНЫХ УСЛУГАХ</span></p>
    <p align="CENTER"><span>(в соответствиис п.п. 9, 10 Правил предоставления гостиничных услуг в Российской Федерации, утв. Постановлением Правительства РФ от 9 октября 2015г. № 1085)</span></p>
    <p align="CENTER">&nbsp;</p>
    <table width="100%" border="1" cellSpacing="0" cellPadding="4">
      <colgroup>
        <col width="128*" />
        <col width="128*" />
      </colgroup>
      <tbody>
        <tr valign="TOP">
          <td width="50%">
            <p align="CENTER"><span>Наименоваие обязательной к размещению информации</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>Содержание информиции</span></p>
            <p align="CENTER">&nbsp;</p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Наименование</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>Общество с ограниченой ответственностью « Олимп»</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Фирменное наименование</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>Гостиница «Сити Парк»</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Адрес</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>352630, Краснодарский край, Белореченский район, г. Белореченск, ул Гоголя, 61</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Номер контактного телефона</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>(86155)2-25-38, факс (86155)3-34-86</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Документ подтверждающий факт внесения сведений о юридическом лице в ЕГРЮЛ</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Свидетельство о государственной регстрации юридического лица серия 23 № 009003323 дата выдачи 7.02.2014</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Орган, осуществивший госсударственную регистрацию</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Межрайоная инспекция Федеральной налоговой службы №9 по Краснодарскому краю</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Категории номеров и цены</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Согласно приложению № 1. Исполнитель вправе в зависимости от коньюктуры рынка изменять тарифы, предоставлять скидки, бонусы и т.&nbsp;п.</span></p>
            <p align="LEFT"><span>Актуальная информация о действующих скидках, бонусах размещаеться на сайте www.cityparkvip.ru</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о присвоении гостиницы категории, наименование организации , проводившей классификацию, дата выдачи и номера свидетельства, срок действия</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Присвоена категория «Без звезд»,</span></p>
            <p align="LEFT"><span>Аккредитованная организация непубличное акционерное общество «Курорт экспертиза»(аттестат аккредитации №07 от 26.06.2015 номер в аккредитованной организации в федеральном реестре 220000027)</span></p>
            <p align="LEFT"><span>Выдано свидетельство о присвоении категории № 550001647 дата выдачи 03.10.2016г. действует по 02.10.2019г.</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Перечень услуг, входящих в стоимость номера</span></p>
          </td>
          <td width="50%">
            <p align="JUSTIFY"><span><span>Обслуживание в номере: уборка один раз в сутки с заменой гостиничных принадлежностей, полотенец,замена постельного белья, халата, тапочек один раз в трое суток. Без дополнительной платы гостиница предоставляет гостям следующие виды услуг:</span></span>
            </p>
            <p align="JUSTIFY"><span><span>- вызов "Скорой помощи";</span></span>
            </p>
            <p align="JUSTIFY"><span><span>- пользование медицинской аптечкой;</span></span>
            </p>
            <p align="JUSTIFY"><span><span>- побудка к определенному времени;</span></span>
            </p>
            <ul>
              <li>
                <p align="JUSTIFY"><span><span>предоставление кипятка, иголок, ниток, одного комплекта посуды и столовых приборов;</span></span>
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о форме и порядке оплаты</span></p>
          </td>
          <td width="50%">
            <p align="JUSTIFY"><span><span>Плата за проживание в гостинице взимается в соответствии с единым расчетным часом</span><span>&nbsp;-&nbsp;</span><span>с</span><span>&nbsp;12&nbsp;</span><span>часов текущих суток по местному времени</span><span>.</span></span>
            </p>
            <p align="JUSTIFY"><span><span>Время заезда устанавливается администрацией гостиницы</span><span>.&nbsp;</span><span>Разница между временем выезда Потребителя из номера и заезда Потребителя в номер не может составлять более</span><span>&nbsp;2 (двух)&nbsp;</span><span>часов</span><span>.</span></span>
            </p>
            <p align="JUSTIFY"><span><span>При размещении до расчетного часа</span><span>&nbsp;(</span><span>с</span><span>&nbsp;8&nbsp;</span><span>до</span><span>&nbsp;12&nbsp;</span><span>часов</span><span>)&nbsp;</span><span>плата за проживание не взимается</span><span>.</span></span>
            </p>
            <p align="JUSTIFY"><span><span>В случае задержки выезда Потребителя плата за проживание взимается в следующем порядке</span><span>:</span></span>
            </p>
            <p align="JUSTIFY"><span><span>-&nbsp;</span><span>не более</span><span>&nbsp;6&nbsp;</span><span>часов после расчетного часа</span><span>&nbsp;—&nbsp;</span><span>почасовая оплата</span><span>;(300 руб/час)</span></span>
            </p>
            <p align="JUSTIFY"><span><span>-&nbsp;</span><span>от</span><span>&nbsp;6&nbsp;</span><span>до</span><span>&nbsp;12&nbsp;</span><span>часов после расчетного часа</span><span>&nbsp;—&nbsp;</span><span>плата за половину суток</span><span>;</span></span>
            </p>
            <p align="JUSTIFY"><span><span>-&nbsp;</span><span>от</span><span>&nbsp;12&nbsp;</span><span>до</span><span>&nbsp;24&nbsp;</span><span>часов после расчетного часа</span><span>&nbsp;—&nbsp;</span><span>плата за полные сутки</span><span>&nbsp;(</span><span>если нет почасовой оплаты</span><span>).</span></span>
            </p>
            <p align="JUSTIFY"><span><span>При проживании не более суток</span><span>&nbsp;(24&nbsp;</span><span>часов</span><span>)&nbsp;</span><span>плата взимается за сутки не зависимо от расчетного часа</span><span>.</span></span>
            </p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Перечень и цены иных платных услуг, оказываемых исполнителем за отдельную плату, условия их предоставления и оплаты</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>1)Завтрак согласно приложению №2</span></p>
            <p align="LEFT"><span>2)Лоби -бар согласно приложению№3</span></p>
            <p align="LEFT"><span>3)Услуги прачечной согласно приложению №4</span></p>
            <p align="LEFT"><span>4)Доставка в номер — 50 руб.</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о форме, условиях и порядке бронирования, анулирования брони</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Согласно приложению №5</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения об инных платных услугах, оказываемых в гостинице третьими лицами</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Услуги кафе оказывает ООО «Олимп» кафе «Сити Парк» ИНН2309117400/КПП236801001</span></p>
            <p align="LEFT"><span>352630, Кпаснодарский край, Белореченский район, г Белореченск, ул Гоголя, 61</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о времени заезда (выезда) из гостиницы</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Круглосуточно</span></p>
            <p align="LEFT"><span>Разница между временем выезда потребителя из номера и заезда потребителя в номер составляет 2 часа</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о правилах проживаниях в гостинице</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Согласно приложению № 6</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о правилах пожарной безопасности в гостинице «Сити Парк»</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Согласно приложению №7</span></p>
            <p align="LEFT">&nbsp;</p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Сведения о ценах на порчу имущества гостиницы</span></p>
          </td>
          <td width="50%">
            <p align="LEFT"><span>Согласно приложению №8</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span><strong>Приложение № 1</strong></span></p>
    <p align="CENTER"><span>к информации об Исполнитель и о предоставляемых исполнителем гостиничных услугах</span></p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span>Категории номеров и цены 2016г.</span></p>
    <table width="100%" border="1" cellSpacing="0" cellPadding="4">
      <colgroup>
        <col width="128*" />
        <col width="128*" />
      </colgroup>
      <tbody>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>Категори</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>цена</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>«Люкс»*</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>5000</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>«Первая категория»* одноместный с двуспальной кроватью</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>2500</span></p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>«Первая категори»* одноместный с двуспальной кроватью и балконом</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>3000</span></p>
            <p align="CENTER">&nbsp;</p>
          </td>
        </tr>
        <tr valign="TOP">
          <td width="50%">
            <p align="LEFT"><span>«Первая категория»* двуместный с двумя односпальными кроватями с возможностью соединения</span></p>
          </td>
          <td width="50%">
            <p align="CENTER"><span>3000</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT"><span>* - согласно приложению к свидетельству о присвоениии категории № 550001647</span></p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span><strong>Приложение № 2</strong></span></p>
    <p align="CENTER"><span>к информации об исполнителе и о предоставляемых исполнителем гостиничных услугах</span></p>
    <p align="CENTER"><span>Завтраки</span></p>
    <p lang="en-US" align="CENTER"><span>Breakfast</span></p>
    <p align="LEFT">&nbsp;</p>
    <table dir="ltr" border="1" cellSpacing="0" cellPadding="0">
      <colgroup>
        <col width="600" />
      </colgroup>
      <tbody>
        <tr>
          <td>Яйца вареные (2 шт)</td><td>30 руб</td>
        </tr>
        <tr>
          <td>Boiled eggs (2 pieces)</td><td>30 rub</td>
        </tr>
        <tr>
          <td>Самса с сыром (110 гр)</td><td>100 руб</td>
        </tr>
        <tr>
          <td>Samsa with cheese (110 g)</td><td>100rub</td>
        </tr>
        <tr>
          <td>Самса с мясом (110гр)</td><td>100 руб</td>
        </tr>
        <tr>
          <td>Samsa with meat (110 g)</td><td>100rub</td>
        </tr>
        <tr>
          <td>Омлет (130гр)</td><td>80 руб</td>
        </tr>
        <tr>
          <td>Omellete (130g)</td><td>80rub</td>
        </tr>
        <tr>
          <td>Омлет с копченостями (150гр)</td><td>120 руб</td>
        </tr>
        <tr>
          <td>Omellete with Smoked Meat (150g)</td><td>120rub</td>
        </tr>
        <tr>
          <td>Омлет с сыром (150гр)</td><td>110 руб</td>
        </tr>
        <tr>
          <td>Omellete with Cheese (150g)</td><td>110rub</td>
        </tr>
        <tr>
          <td>Овсяная каша с фруктами (100гр)</td><td>50 руб</td>
        </tr>
        <tr>
          <td>Oatmeal with Fruits</td><td>50rub</td>
        </tr>
        <tr>
          <td>Салат свекольный (свекла, яблоко, орех, масло растительное)</td><td>100 руб</td>
        </tr>
        <tr>
          <td>Beetroot salad (beetroot,vegetable oil, walnut, apple)</td><td>100rub</td>
        </tr>
        <tr>
          <td>Салат с капустой (капуста, морковь, черри, масло оливковое, зелень)</td><td>100 руб</td>
        </tr>
        <tr>
          <td>Salad with cabbage (cabbage, carrots, tomato, olive oil, parsley)</td><td>100rub</td>
        </tr>
        <tr>
          <td>Кускус с овощами (кускус,тыква,цукини,лук,чеснок,черри)</td><td>200 руб</td>
        </tr>
        <tr>
          <td>Couscous with vegetables (couscous, pumpkin, zucchini, onion, garlic, tomato)</td><td>200 rub</td>
        </tr>
        <tr>
          <td>Ризотто с грибами (грибы, лук, черри, чеснок, зелень)</td><td>180 руб</td>
        </tr>
        <tr>
          <td>Risotto with mushrooms (mushrooms, onions, garlic, tomatoes, garlic, parsley)</td><td>180rub</td>
        </tr>
        <tr>
          <td>Блины с топпингом (100гр)</td><td>60 руб</td>
        </tr>
        <tr>
          <td>Blintz with Topping (100g)</td><td>60rub</td>
        </tr>
        <tr>
          <td>Блины со сгущенкой (100гр)</td><td>60 руб</td>
        </tr>
        <tr>
          <td>Blintz with Condensed Milk (100g)</td><td>60rub</td>
        </tr>
        <tr>
          <td>Блины с медом (100гр)</td><td>80 руб</td>
        </tr>
        <tr>
          <td>Blintz with Honey (100g)</td><td>80rub</td>
        </tr>
        <tr>
          <td>Блины фаршированные творогом (150гр)</td><td>120 руб</td>
        </tr>
        <tr>
          <td>Blintz with Cottage Cheese Filling (150g)</td><td>120rub</td>
        </tr>
        <tr>
          <td>Рататуй (200гр)</td><td>180руб</td>
        </tr>
        <tr>
          <td>Ratatouille (200g)</td><td>180rub</td>
        </tr>
        <tr>
          <td>Штрудель (яблочный,ягодный,творожный )</td><td>220 руб</td>
        </tr>
        <tr>
          <td>Strudel (apple, berry, cottage)</td><td>220rub</td>
        </tr>
        <tr>
          <td>Чизкейк (ванильный, шоколадный, ягодный) 150гр</td><td>180руб</td>
        </tr>
        <tr>
          <td>Cheesecake ( vanilla , chocolate , berry) 150g</td><td>180rub</td>
        </tr>
        <tr>
          <td>Фрукты в ассортименте: виноград(100гр)</td><td>70 руб</td>
        </tr>
        <tr>
          <td>Fruit Assortment:Grape(100gr)</td><td>70rub</td>
        </tr>
        <tr>
          <td>апельсин, банан, яблоко, груша, киви</td><td>50 руб</td>
        </tr>
        <tr>
          <td>orange,banana,apple,pear,kiwi</td><td>50rub</td>
        </tr>
        <tr>
          <td>Хлеб белый, черный (1шт)</td><td>10 руб</td>
        </tr>
        <tr>
          <td>Black,whiye bread (per 1 piece)</td><td>10rub</td>
        </tr>
        <tr>
          <td>Бутерброды сборные:</td><td></td>
        </tr>
        <tr>
          <td>Хлеб белый, черный (1шт)</td><td>10 руб</td>
        </tr>
        <tr>
          <td>Ветчина 30 гр</td><td>35 руб</td>
        </tr>
        <tr>
          <td>Сыр Российский 30 гр</td><td>30 руб</td>
        </tr>
        <tr>
          <td>Масло сливочное 20гр</td><td>16 руб</td>
        </tr>
        <tr>
          <td>Sandwiches:</td><td></td>
        </tr>
        <tr>
          <td>Bread white, black (1 piece)</td><td>10 rub</td>
        </tr>
        <tr>
          <td>Ham 30 gr</td><td>35 rub</td>
        </tr>
        <tr>
          <td>Cheese Russian 30 gr</td><td>30 rub</td>
        </tr>
        <tr>
          <td>Butter 20gr</td><td>16 rub</td>
        </tr>
      </tbody>
    </table>
    <p />
    <p lang="en-US" align="LEFT">&nbsp;</p>
    <p lang="ru-RU" align="CENTER">&nbsp;</p>
    <p lang="ru-RU" align="CENTER"><span>Заказ завтраков принимается до 01:00</span></p>
    <p lang="en-US" align="CENTER"><span>Breakfast orders are taken until 01:00</span></p>
    <p lang="ru-RU" align="CENTER"><span>Доставка еды в номер - 50 руб</span></p>
    <p lang="en-US" align="CENTER"><span>Delivery of food to the room - 50rub</span></p>
    <p align="RIGHT">&nbsp;</p>
    <p align="RIGHT">&nbsp;</p>
    <p align="RIGHT">&nbsp;</p>
    <p align="CENTER"><span><strong>Приложение № 3</strong></span></p>
    <p align="CENTER"><span>к информации об исполнителе и о предоставляемых исполнителем гостиничных услугах</span></p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span>Лобби бар</span></p>
    <p align="LEFT">&nbsp;</p>
    <table dir="ltr" border="1" cellSpacing="0" cellPadding="0">
      <colgroup>
        <col width="254" />
        <col width="81" />
        <col width="259" />
        <col width="72" />
      </colgroup>
      <tbody>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Нарзан 0,5 л.&quot;}">Нарзан 0,5 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;100руб&quot;}">100руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Сок в ассортименте 0,3 л.&quot;}">Сок в ассортименте 0,3 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 руб&quot;}">80 руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Mineral Water Narzan 0,5 L&quot;}">Mineral Water Narzan 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;100 rub&quot;}">100 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Juice in assortment&quot;}">Juice in assortment</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 rub&quot;}">80 rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Лимонад 0,5 л.&quot;}">Лимонад 0,5 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 руб&quot;}">80 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Пиво Балтика «0» 0,5 л.&quot;}">Пиво Балтика «0» 0,5 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;100руб&quot;}">100руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Lemonade 0,5 L&quot;}">Lemonade 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 rub&quot;}">80 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Beer Baltika non-alс 0,5 L&quot;}">Beer Baltika non-alс 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;100rub&quot;}">100rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Швепс 0,25 л.&quot;}">Швепс 0,25 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120руб&quot;}">120руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Пиво Хольстен 0,5 л.&quot;}">Пиво Хольстен 0,5 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;160руб&quot;}">160руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Schweppes 0,25 L&quot;}">Schweppes 0,25 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120rub&quot;}">120rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Beer Holsten 0,5 L&quot;}">Beer Holsten 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;160rub&quot;}">160rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Спрайт 0,25 л. &quot;}">Спрайт 0,25 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120руб&quot;}">120руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Пиво Туборг 0,5&quot;}">Пиво Туборг 0,5</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;140руб&quot;}">140руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Sprite 0,25 L &quot;}">Sprite 0,25 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120rub&quot;}">120rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Beer Tuborg 0,5 L&quot;}">Beer Tuborg 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;140rub&quot;}">140rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Кока — кола 0,25 л.&quot;}">Кока — кола 0,25 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120руб&quot;}">120руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Виски Джек Дениэлс с Теннесси 0,05&quot;}">Виски Джек Дениэлс с Теннесси 0,05</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;380руб&quot;}">380руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Coca — cola 0,25 L&quot;}">Coca — cola 0,25 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;120rub&quot;}">120rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Whiskey Jack Daniels Tennessee 0,05 L&quot;}">Whiskey Jack Daniels Tennessee 0,05 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;380rub&quot;}">380rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Бон — Аква 0,5 л.&quot;}">Бон — Аква 0,5 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 руб&quot;}">80 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Виски Джемесон 0,05&quot;}">Виски Джемесон 0,05</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;350руб&quot;}">350руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Bon Aqua 0,5 L&quot;}">Bon Aqua 0,5 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;80 rub&quot;}">80 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Whiskey Jameson 0,05 L&quot;}">Whiskey Jameson 0,05 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;350rub&quot;}">350rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Круасан 65 гр.&quot;}">Круасан 65 гр.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;40 руб&quot;}">40 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Виски Баллантайнс 0,05&quot;}">Виски Баллантайнс 0,05</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;250руб&quot;}">250руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Croissant 65 g&quot;}">Croissant 65 g</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;40 rub&quot;}">40 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Whiskey Ballantines  0,05 L&quot;}">Whiskey Ballantines 0,05 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;250rub&quot;}">250rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Чай Гринфилд черн. Зелен.&quot;}">Чай Гринфилд черн. Зелен.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 руб&quot;}">50 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Виски Чивас Ригал 12 лет 0,05 л&quot;}">Виски Чивас Ригал 12 лет 0,05 л</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;560руб&quot;}">560руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Greenfield Black tea, Green tea&quot;}">Greenfield Black tea, Green tea</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 rub&quot;}">50 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Whiskey Chivas Regal 12 years  0,05 L&quot;}">Whiskey Chivas Regal 12 years 0,05 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;560rub&quot;}">560rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Чай Липтон фруктовый&quot;}">Чай Липтон фруктовый</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;40 руб&quot;}">40 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Коньяк Арарат 5 лет 0,05 л&quot;}">Коньяк Арарат 5 лет 0,05 л</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;300руб&quot;}">300руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Lipton fruit tea &quot;}">Lipton fruit tea</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;40 rub&quot;}">40 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Brandy Ararat 5 years 0,05 L&quot;}">Brandy Ararat 5 years 0,05 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;300rub&quot;}">300rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Кофе натуральный &quot;}">Кофе натуральный</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;60 руб&quot;}">60 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Коньяк Старый Кенигсберг 0,1 л&quot;}">Коньяк Старый Кенигсберг 0,1 л</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;180руб&quot;}">180руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Natural Coffe&quot;}">Natural Coffe</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;60 rub&quot;}">60 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Brandy Old Keningsberg 0,1 L&quot;}">Brandy Old Keningsberg 0,1 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;180rub&quot;}">180rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Кофе раств. со сливками&quot;}">Кофе раств. со сливками</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 руб&quot;}">50 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ликер  Ягермайстер 0,04 л&quot;}">Ликер Ягермайстер 0,04 л</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;250руб&quot;}">250руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Instant Coffe with cream&quot;}">Instant Coffe with cream</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 rub&quot;}">50 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Liker Yagermayster 0,04 L&quot;}">Liker Yagermayster 0,04 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;250rub&quot;}">250rub</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Молоко 0,2 л.&quot;}">Молоко 0,2 л.</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 руб&quot;}">50 руб</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ром Гавана Клуб Аньехо 3 года 0,05&quot;}">Ром Гавана Клуб Аньехо 3 года 0,05</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;270руб&quot;}">270руб</td>
        </tr>
        <tr>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Milk 0,2 L&quot;}">Milk 0,2 L</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;50 rub&quot;}">50 rub</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Rom Havana Club Anejo 3 years 0,05 &quot;}">Rom Havana Club Anejo 3 years 0,05</td>
          <td data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;270rub&quot;}">270rub</td>
        </tr>
      </tbody>
    </table>
    <p align="LEFT"><span><strong>&nbsp;</strong></span></p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT"><span><strong>Доставка в номер — 50 рублей</strong></span></p>
    <p align="LEFT"><strong>Delivery to the room-50rub</strong></p>
    <p align="RIGHT">&nbsp;</p>
    <p align="RIGHT">&nbsp;</p>
    <p align="CENTER"><span><strong>Приложение № 4</strong></span></p>
    <p align="CENTER"><span>к информации об исполнителе и о предоставляемых исполнителем гостиничных услугах</span></p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span><span>Прейскурант цен на услуги прачечной</span></span>
    </p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT">&nbsp;</p>
    <table dir="ltr" border="1" cellSpacing="0" cellPadding="0">
      <colgroup>
        <col width="254"/>
        <col width="100"/>
      </colgroup>
      <tbody>
        <tr>
          <td/><td>Стирка</td><td>Глажка</td>
        </tr>
        <tr>
          <td>Футболка</td><td>50</td><td>50</td>
        </tr> 
        <tr>
          <td>Шорты</td><td>50</td><td>50</td>
        </tr> 
        <tr>
          <td>Рубашка</td><td>100</td><td>100</td>
        </tr> 
        <tr>
          <td>Джинсы</td><td>100</td><td>100</td>
        </tr> 
        <tr>
          <td>Брюки</td><td>100</td><td>100</td>
        </tr> 
        <tr>
          <td>Спортивные брюки</td><td>100</td><td>100</td>
        </tr> 
      </tbody>
    </table>    
    <p align="LEFT"><span><span>&nbsp;</span></span>
    </p>
    <p align="LEFT">&nbsp;</p>
    <p align="RIGHT"><span><span>Утверждаю _____________ген.директор Попов Д.А</span></span><span>.</span></p>
    <p align="RIGHT"><span>&nbsp;</span></p>
    <p align="RIGHT"><span>&nbsp;</span></p>
    <p align="CENTER"><span><span><strong>Приложение № 5</strong></span></span>
    </p>
    <p align="CENTER"><span>к информации об исполнителе и о предоставляемых исполнителем гостиничных услугах</span></p>
    <p align="CENTER"><span>Сведения о форме, условиях и порядке бронирования, аннулирования брони:</span></p>
    <p align="LEFT"><span><span>Бронирование — предварительный заказ номеров в отеле заказчиком(потребителем).</span></span>
    </p>
    <p align="LEFT"><span><span>Исполнитель осуществляет бронирование путем принятия заявки на бронирование(далее — заявка) посредством почтовой , телефонной и иной связи, позволяющей установить, что заявка исходит от потребителя.</span></span>
    </p>
    <p align="LEFT"><span><span>Отказ от брони должен быть направлен исполнителю в произвольной форме, в том же порядке, что и заявка на бронирование: посредством почтовой, телефонной и иной связи, позволяющей установить, что заявка исходит от заказчика.</span></span>
    </p>
    <p align="LEFT"><span><span>Исполнитель в праве отменить бронь при опоздании заказчика более, чем на сутки.</span></span>
    </p>
    <p align="LEFT"><span><span>Исполнитель в праве отказать в бронирование, если на указаную в заявке дату в отеле отсутствуют свободные номера.</span></span>
    </p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT">&nbsp;</p>
    <p align="CENTER"><span><span><strong>Приложение № 6</strong></span></span>
    </p>
    <p align="CENTER"><span><span>к информации об исполнителе и о предоставляемых исполнителем гостиничных услугах.</span></span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER">&nbsp;</p>
    <p align="CENTER"><span><span><span lang="ru-RU">Правила проживания в гостинице</span></span>
    </span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <ul>
      <li>
        <p lang="ru-RU" align="LEFT"><span><span><span>Размещение Гостя осуществляется по предоставлению Администратору паспорта или водительское удостоверение и внесении 100% оплаты минимум за сутки проживания в гостинице</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Если Вы иностранный гражданин, будьте готовы представить следующие документы: паспорт; миграционную карту; визу (при необходимости); свидетельство о временном проживании в России (при необходимости).&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Администратор гостиницы не изымает паспорт или другой документ на период Вашего у нас отдыха.&nbsp;</span></span>
        </span>
        </p>
      </li>
    </ul>
    <p align="CENTER">&nbsp;</p>
    <p align="JUSTIFY"><span><span><span>При заселении в отель Вы получаете ключ от номера.</span></span>
    </span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <ul>
      <li>
        <p align="JUSTIFY"><span><span><span>Для сохранности документов, материальных средств или драгоценностей в каждом номере есть сейф, которым Вы можете воспользоваться. Также, вся территория гостиничного комплекса, кроме номеров и санузлов, находится под круглосуточным видеонаблюдением.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>После того, как Вы вселились в номер, пожалуйста, внимательно осмотрите его на пр едмет неисправности или недостатков, если таковые обнаружены обратитесь к Администратору с просьбой их устранить. Убедительная просьба, не осуществлять самостоятельный ремонт электроприборов и оборудования.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Мы не принимаем на отдых с животными, птицами, рептилиями и другими представителями фауны.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>В номерах гостиницы не предусмотрены условия для самостоятельного приготовления пищи.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Пожалуйста, соблюдайте Правила противопожарной безопасности. Курить в гостиничном номере категорически запрещено!</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Запрещено приносить и хранить оружие, взрывчатые и легко воспламеняющиеся, едкие, ядовитые, наркотические вещества и иные опасные предметы; гости, имеющие по роду своей деятельности право на ношение и хранение оружия, обязаны по требованию Администратора гостиничного комплекса предоставить документы, удостоверяющие данное право.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Неприемлемо шуметь в номере или на территории гостиницы после 23:00</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Крайне нежелательно устраивать семейные разборки или пьяные дебоши в гостинице.&nbsp;</span></span>
        </span>
        </p>
      </li>
      <li>
        <p align="JUSTIFY"><span><span><span>Пожалуйста, соблюдайте чистоту на территории Гостиничного комплекса. Для сбора мусора предназначены урны и пепельницы.&nbsp;</span></span>
        </span>
        </p>
      </li>
    </ul>
    <p align="CENTER">&nbsp;</p>
    <p align="JUSTIFY"><span><span><span>Если у Вас возникают вопросы или сложности с обслуживанием в гостинице, не стесняйтесь обращаться к администратору.</span></span>
    </span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <p align="JUSTIFY"><span><span><span>Ущерб, нанесенный гостиничному комплексу, возмещается отдыхающим (ответственным лицом от группы отдыхающих) на месте в полном объеме наличным или банковской картой. Ущерб рассчитывается администрацией по прайс-листу.</span></span>
    </span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <p align="JUSTIFY"><span><span><span>За нарушение правил общественного порядка, пожарной безопасности, умышленное нанесение вреда здоровью и имуществу других Гостей, пребывающих в гостинице, порчу имущества гостиницы, оскорбление администрации, обслуживающего персонала или отдыхающих, Администрация вправе отказать виновным в дальнейшем пребывании на территории гостиницы без возмещения стоимости проживания.&nbsp;</span></span>
    </span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <p align="LEFT"><span><span><span><span>Администрация гостиничного комплекса оставляет за собой право не предоставлять услуги проживания лицам, находящимся в алкогольном, наркотическом опьянении или под действием психотропных препаратов.</span></span>
    </span>
    </span>
    </p>
    <p align="CENTER"><span><span lang="ru-RU">&nbsp;</span></span>
    </p>
    <p align="CENTER">&nbsp;</p>
    <p align="RIGHT"><span><span>Утверждаю ___________ген.директор Попов Д.А.</span></span>
    </p>
    <p align="CENTER"><span><span><strong>Приложение № 7</strong></span></span>
    </p>
    <p align="CENTER"><span><span>к информации об исполнителе и о предоставляемых исполнителем гостиничых услугах</span></span>
    </p>
    <p align="CENTER"><span><strong>Памятка о правилах пожарной безопасности в гостинице</strong></span></p>
    <p align="CENTER"><span><strong>Уважаемые гости!</strong></span><span><br /></span><strong>Просим соблюдать правила пожарной безопасности</strong>.</p>
    <p><span>Уходя из номера, не забывайте выключить телевизор, радиоприёмник, кондиционер, лампы освещения и электронагревательные приборы.<br />Напоминаем Вам, что запрещается накрывать включенные торшеры и настольные лампы предметами из&nbsp;горючего материала.<br />Курить в здании гостиницы разрешается только в специально отведённых местах, категорически запрещается курение в постели.<br />Запрещается хранение в номере взрыво - пожароопасных веществ и материалов.</span></p>
    <p><span><strong>Если Вы прибыли в гостиницу в первый раз, постарайтесь хорошо запомнить расположение выходов и&nbsp;лестниц, ознакомьтесь с планом эвакуации и местонахождением первичных средств пожаротушения.</strong></span></p>
    <h3 className="western"><span><span>В случае пожара в Вашем номере:</span></span></h3>
    <ol>
      <li>
        <p><span>Немедленно сообщите о случившемся в пожарную часть по&nbsp;телефону&nbsp;"01". Если ликвидировать очаг горения своими силами не представляется возможным, выйдите из&nbsp;номера и закройте дверь, не&nbsp;запирая её на&nbsp;замок.</span></p>
      </li>
      <li>
        <p><span>Обязательно сообщите о пожаре дежурной по этажу или другому представителю администрации.</span></p>
      </li>
      <li>
        <p><span>Покиньте опасную зону и действуйте по указанию администрации или пожарной охраны.</span></p>
      </li>
    </ol>
    <p><span>В случае пожара вне Вашего номера:</span></p>
    <ol>
      <li>
        <p><span>Немедленно сообщите о случившемся в пожарную охрану по&nbsp;телефону&nbsp;"01".</span></p>
      </li>
      <li>
        <p><span>Покиньте Ваш номер после того, как закроете окна и двери, выйдите из&nbsp;здания.</span></p>
      </li>
      <li>
        <p><span>Если коридоры и лестничные клетки сильно задымлены и покинуть помещение не представляется возможным, необходимо оставаться в&nbsp;Вашем номере, открыв настежь окна. Закрытая и хорошо уплотнённая дверь может надолго защитить Вас от&nbsp;опасной температуры. Чтобы избежать отравления дымом, закройте щели и вентиляционные отверстия смоченными водой полотенцами и постельными принадлежностями.</span></p>
      </li>
      <li>
        <p><span>Постарайтесь сообщить по телефону администрации о&nbsp;своём местонахождении.</span></p>
      </li>
      <li>
        <p><span>С прибытием к месту происшествия пожарных подойдите к&nbsp;окну и подайте знак об&nbsp;оказании Вам помощи. Переждать пожар можно на&nbsp;балконе или в&nbsp;лоджии, при&nbsp;этом необходимо закрыть за&nbsp;собой балконную дверь.</span></p>
      </li>
    </ol>
    <p align="RIGHT"><br /><br /></p>
    <p align="CENTER"><br /><br /></p>
    <p align="CENTER"><span><strong>Приложение №8</strong></span></p>
    <p align="CENTER"><span><span>к информации об исполнителе и о предоставляемых исполнителем гостиничых услугах</span></span>
    </p>
    <p align="CENTER"><span><strong>Порча имущества</strong></span></p>
    <p align="CENTER">&nbsp;</p>
    <p align="LEFT"><span><span><strong>Порча &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Частичная порча</strong></span></span>
    </p>
    <p align="LEFT">&nbsp;</p>
    <p align="LEFT"><span><span>Халат 1650руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 500руб</span></span>
    </p>
    <p align="LEFT"><span><span>Покрывало 2000руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;700руб</span></span>
    </p>
    <p align="LEFT"><span><span>Одеяло 1850руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 600руб</span></span>
    </p>
    <p align="LEFT"><span><span>Пододеяльник 2100руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 700руб</span></span>
    </p>
    <p align="LEFT"><span><span>Подушка 600руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 200руб</span></span>
    </p>
    <p align="LEFT"><span><span>Простынь 1200руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;400руб</span></span>
    </p>
    <p align="LEFT"><span><span>Надматрассник 1600руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;550руб</span></span>
    </p>
    <p align="LEFT"><span><span>Матрас 11000руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Кровать 6000руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Изголовье кровати 5000руб &nbsp; &nbsp; 1700руб</span></span>
    </p>
    <p align="LEFT"><span><span>Душевая кабина 15000руб &nbsp; &nbsp; &nbsp; 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Шкаф 3000руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Холодильник 10600руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3600руб</span></span>
    </p>
    <p align="LEFT"><span><span>Телевизор 27500руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Урна 500руб &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 500руб</span></span>
    </p>
    <p align="LEFT"><span><span>&nbsp;</span></span>
    </p>
    <p align="LEFT"><span><span>Занавески 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Шторы 3000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Люстра 6000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Лампа настоль 4000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Потолок 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Лампа 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Комод 3000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Обои 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Окно 10000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Камин 15000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Шкаф-пенал 8000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Журнальный стол 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Стол 3000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Стул 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Ковер в коридоре 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Телефон 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Двери/ручка 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Кондиционер 15000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Пульт от кондиционера 1000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Пульт от телевизора 3000руб</span></span>
    </p>
    <p align="LEFT"><span><span>3Д очки 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Унитаз 10000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Стульчак унитаза 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Душ 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Кран 2000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Зеркало 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Мыльница 1000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Раковина 7000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Фен 1500 руб</span></span>
    </p>
    <p align="LEFT"><span><span>Полотенце 250руб</span></span>
    </p>
    <p align="LEFT"><span><span>Мыльница 250руб</span></span>
    </p>
    <p align="LEFT"><span><span>Стаканы для зубной щетки 400руб</span></span>
    </p>
    <p align="LEFT"><span><span>Полка в ванной 600руб</span></span>
    </p>
    <p align="LEFT"><span><span>Диван 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Кресло 5000руб</span></span>
    </p>
    <p align="LEFT"><span><span>Карандашница 150руб</span></span>
    </p>
    <p align="LEFT"><span><span>Наволочка 450руб</span></span>
    </p>
    <p align="LEFT"><span><span>ключ от двери 500руб</span></span>
    </p>
    <p align="LEFT"><span><span>Пуфик 2000руб</span></span>
    </p>
    <p align="LEFT">&nbsp;</p>
    <p><span><span>&nbsp;</span></span>
    </p>
    <p>&nbsp;</p>
  </div>
