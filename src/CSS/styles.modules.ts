import styled from "styled-components";
import { fontFamily } from "../modules/styles";

//*Display Weather Styles
export const WeatherMainContainer = styled.div`
  .container {
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weatherContainer {
    width: 80%;
    background-color: #ffffff7d;
    backdrop-filter: blur(33px);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    transition: all 0.4s ease-in-out;
    animation: slideIn 1s ease-in;
    /* width: calc(100% - 4rem); */
  }

  //!slide in effect keyframe
  @keyframes slideIn {
    from {
      transform: translatey(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .splitWeather {
    display: flex;

    //!SearchWeather Styles From Here
    .leftSideBar {
      border-radius: 10px;
      box-shadow: 5px 0 10px rgba(0, 0, 0, 0.07);
      padding: 10px;
      width: 40%;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;

        > h1 {
          font-family: ${fontFamily.roboto};
          position: relative;
        }
        .logoIcon {
          font-size: 2.5rem;
          color: #321e1e;
        }
      }

      .searchedData {
        margin-top: 2rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        font-family: ${fontFamily.description};

        p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          align-items: center;
          width: 90%;
          box-shadow: 1px 1px 10px -6px rgba(0, 0, 0, 0.4);
          border-radius: 20px;
          padding: 20px;

          > span {
            display: flex;
            justify-content: space-between;
            position: relative;
          }
        }

        //select the span with icons
        p:nth-child(1) > span:nth-child(2),
        p:nth-child(2) > span:nth-child(2),
        p:nth-child(3) > span:nth-child(2),
        p:nth-child(4) > span:nth-child(2),
        p:nth-child(5) > span:nth-child(2),
        p:nth-child(6) > span:nth-child(2),
        p:nth-child(7) > span:nth-child(2) {
          color: #610094;
          position: absolute;
          left: 20.2%;
          font-size: 30px;
        }
      }

      .copyright {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: ${fontFamily.description};
        text-align: center;

        p:nth-child(1) > span:nth-child(1) {
          font-weight: 600;
          color: hotpink;
        }

        > a {
          margin-top: 10px;
          text-decoration: none;
          color: orange;
        }
      }
    }

    //!ForcastComponent Styles From Here
    .rightSideBar {
      height: 79.8vh;
      width: 60%;
      padding: 10px;

      //! Toggle Beteen C & F units
      .forcastContainer {
        .temperatureToggle {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 10px;
        }

        .temperatureToggle > p {
          color: grey;
          padding: 0 5px;
          font-weight: bolder;
          font-family: ${fontFamily.roboto};
          transition: all 0.3s ease-in-out;
        }

        .temperatureToggle > p.active {
          color: hotpink;
          transform: scale(1.2);
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
          input[type="checkbox"] {
            display: none;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #c7c7eb;
            transition: 0.4s;
            border-radius: 20px;

            &:before {
              position: absolute;
              content: "";
              height: 16px;
              width: 16px;
              left: 2px;
              bottom: 2px;
              background-color: white;
              transition: 0.4s;
              border-radius: 50%;
            }
          }

          input:checked + .slider {
            background-color: #2196f3;
            &:before {
              transform: translateX(20px);
            }
          }
        }

        //!Top section for City & Weather Description
        .cityName {
          text-align: center;
          font-family: ${fontFamily.input};
          line-height: 1;

          h1 {
            font-size: 4rem;
          }

          p {
            font-size: 2em;
          }
        }

        .topSectionWeather {
          margin: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .forcastDescription {
            font-family: ${fontFamily.description};
            font-size: 1.6rem;
            margin-left: 1rem;

            p {
              font-weight: 600;
              line-height: 1.6;
            }

            em {
              position: relative;
              font-size: 20px;

              .windIcon {
                color: grey;
                position: absolute;
                top: 0;
                margin-left: 6px;
                font-size: 2rem;
              }
            }
          }

          .sideWeatherUnit {
            font-size: 3rem;
            text-align: right;

            h1 {
              font-family: ${fontFamily.temprature};
            }

            h1 > span:nth-child(1) {
              position: relative;
              bottom: 22px;
              right: 25px;
              font-size: 0.8em;
              font-family: ${fontFamily.description};
            }

            span:nth-child(2) {
              font-size: 0.5em;
              position: relative;
              bottom: 55px;
              right: 45px;
              color: rgba(0, 0, 0, 0.7);
              font-family: ${fontFamily.wind};
            }
            p {
              font-size: 0.8em;
              margin-left: 10px;
              line-height: 0.2;
              font-family: ${fontFamily.input};
            }
          }
        }

        //! middle section for Forecasting

        .middleForcasting {
          border-top: 1px solid grey;
          font-family: ${fontFamily.input};

          .forecastHeading {
            display: flex;
            justify-content: center;
            align-items: center;
            h1 {
              text-align: center;
              margin: 10px;
              font-size: 25px;
            }
            .forecastIcon {
              font-size: 2rem;
            }
          }

          .forcastHourly {
            display: flex;
            justify-content: space-around;
            text-align: center;
            position: relative;

            /* Side labels for min max temprature */
            .heading {
              font-size: 1.2rem;
              position: absolute;
              left: -9px;
              text-align: left;
              color: #fff;

              p {
                margin-top: 15px;
                padding-right: 20px;
                background-color: #000;
                border-radius: 0 20px 20px 0;
              }
            }
          }
        }

        .minMaxWeatherHorly {
          padding-top: 10px;
          font-size: 1.5rem;
          margin-left: 30px;
          p {
            padding: 4px;
          }
        }

        /* //! Bottom Section for Major Cities Weather  */
        .bottomSection {
          border-top: 1px solid grey;
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .citiesInfo {
            position: relative;
            top: 40px;
            text-align: center;
            margin-top: 2rem;

            > p:nth-child(1) {
              font-size: 5rem;
              font-family: ${fontFamily.roboto};
              letter-spacing: -6px;
            }
            > p:nth-child(2) {
              font-size: 20px;
              font-family: ${fontFamily.description};
            }
          }
        }
      }
    }

    //!Search Bar Here for searcheWather component
    .searchBar {
      text-align: center;
      position: relative;
      margin-top: 1rem;

      > input {
        text-align: center;
        width: 90%;
        height: 35px;
        border: none;
        outline: none;
        box-shadow: 1px 1px 10px -2px grey;
        border-radius: 20px;
        padding-right: 30px;
        font-family: ${fontFamily.input};
        font-size: 18px;
        background-color: transparent;
      }

      .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        padding-right: 12px;
        transform: translateY(-50%);
        color: grey;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-size: 20px;

        &:hover {
          font-size: 25px;
          color: black;
        }
      }
    }
  }

  //?MEDIA QUERIES BELOW

  /* Small screens (e.g., smartphones) */
  //!Below 767px
  @media (max-width: 767px) {
    .splitWeather {
      display: flex;

      > .leftSideBar {
        width: 100%;
      }
      > .rightSideBar {
        display: none;
      }

      .searchBar {
        > input {
          width: 60%;
          height: 30px;
        }
        .icon {
          right: calc((40% - 30px) / 2);
        }
      }
    }
  }

  /* Medium screens (e.g., tablets) */
  //!Below 1023px till 768px
  @media (min-width: 768px) and (max-width: 1023px) {
    .splitWeather {
      display: flex;

      > .leftSideBar {
        width: 100%;
        padding: 8px;
      }
      > .rightSideBar {
        display: none;
      }

      .searchBar {
        > input {
          width: 70%;
          height: 30px;
        }
        .icon {
          right: calc((30% - 30px) / 2);
        }
      }
    }
  }

  /* Large screens (e.g., desktops) */
  //!All Above 1024px
  @media (min-width: 1024px) {
  }
`;
