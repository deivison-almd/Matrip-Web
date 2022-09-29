// import { Box } from '@mui/system';
import './hospedagem.scss';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HoverRating from './Hoteis/Widgets/Rating/rating';
import BlueTreeTowersCarrocel from './Hoteis/Widgets/Carrocel/BlueTreeTowersCarrocel/BlueTreeTowersCarrocel';
import HotelLuzeirosCarrocel from './Hoteis/Widgets/Carrocel/HotelLuzeirosCarrocel/HotelLuzeiros';
import SoftWinHotelCarrocel from './Hoteis/Widgets/Carrocel/SoftWinHotel/SoftWinHotel';
import PortoPreguicasCarrocel from './Hoteis/Widgets/Carrocel/PortoPreguicasCarrocel/PortoPreguicasCarrocel';

export default function Hospedagem() {
  return (
    <div className="layoutContainer">
      <h1 className="title">Hospedagens de Destaque</h1>
      <div className="hotelLink">
        <span className="conteudoLink">
          <SoftWinHotelCarrocel />
          <a href="https://www.softwinhotel.com.br/quartos">
            {/* <img src="/images/hoteis/SoftWinHotel/soft-win-hotel.jpg" alt="Soft Win Hotel" /> */}

            <p>
              <span>R$ 85,00/por pessoa</span>
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p>
            <RoomIcon style={{ fontSize: '30px' }} />
            <span className="nameHotel"> Soft Win Hotel</span>
            <p>
              <HoverRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <HotelLuzeirosCarrocel />
          <a href="/IstoEPousada">
            {/* <img src="/images/hoteis/istoepousada.jpg" alt="Hotel Luzeiro" /> */}
            <p>
              R$ 100,00/por pessoa
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p>
            <RoomIcon style={{ fontSize: '30px' }} />
            <span className="nameHotel"> Hotel Louzeiros </span>
            <p>
              <HoverRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <BlueTreeTowersCarrocel />
          <a href="https://google.com.br">
            {/* <img
              src="/images/hoteis/SoftWinHotel/soft-win-hotel.jpg"
              alt="Hotel Luzeiro"
            /> */}
            <div>
              <p>
                R$ 120,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p>
              <RoomIcon />
              <span className="nameHotel"> Blue Tree Towers</span>
              <p>
                <HoverRating />
              </p>
            </div>
          </a>
        </span>
        <span className="conteudoLink">
          <PortoPreguicasCarrocel />
          <a href="https://google.com.br">
            {/* <img
              src="/images/hoteis/SoftWinHotel/soft-win-hotel.jpg"
              alt="Hotel Luzeiro"
            /> */}
            <div>
              <p>
                R$ 90,00/por pessoa
                <span className="inlineText">
                  <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
                </span>
              </p>
              <RoomIcon />
              <span className="nameHotel"> Porto Preguiças</span>
              <p>
                <HoverRating />
              </p>
            </div>
          </a>
        </span>
      </div>
    </div>
  );
}
