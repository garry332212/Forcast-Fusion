import styled from "styled-components";
import { fontFamily } from "../modules/modules";
import cloudy from "../components/assets/clouds.jpg";
import rainy from "../components/assets/rain.jpg";
import Clear from "../components/assets/Clear.jpg";
import mistt from "../components/assets/mistt.jpg";

//*Display Weather Styles
export const WeatherMainContainer = styled.div`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadingWeather {
    position: fixed;
    
    top: 0;
    left:60%;
     top:39.5%;
    /* background: linear-gradient(to right, #c7c7eb, #ccf2dd); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
   

    img {
      height: 150px;
    }

    p {
      font-family: ${fontFamily.description};
      margin-top: 20px;
      font-weight: 800;
    }
  }

  .rainy-bg {
    background-image: url(${rainy});
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .sunny-bg {
    background-image: url(${Clear});
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }

  .cloudy-bg {
    background-image: url(${cloudy});
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
  .foggy-bg {
    background-image: url(${mistt});
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  .default-bg,
  .cloudy-bg,
  .sunny-bg,
  .rainy-bg {
    width: 90%;
    background-size: cover;
    
    background-position: center center;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    color: whitesmoke;
    transition: all 2s ease-in-out;
    /* animation: slideIn 1s ease-in; */
  }

  .default-bg {
    background: black;
    color:white;
  
  }

  //!slide in effect keyframe
  /* @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  } */

  .splitWeather {
    display: flex;
    //!SearchWeather Styles From Here
    .leftSideBar {
      border-radius: 10px;
      box-shadow: 5px 0 10px rgba(0, 0, 0, 0.07);
      padding: 10px;
      width: 35%;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;

        h1 {
          font-family: ${fontFamily.roboto};
        }
        .logoIcon {
          font-size: 2.5rem;
          color: whitesmoke;
        }
      }

      .searchedData {
        margin-top: 1rem;
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
          box-shadow: 1px 1px 10px -4px rgba(255, 255, 255, 0.8);
          border-radius: 50px;
          padding: 12px;
          font-size: 18px;

          .titleSpan {
            flex: 1;
          }

          .iconsSpan {
            color: #610094;
            font-size: 25px;
            vertical-align: middle; /* Align icons vertically */
            width: 50px;
            text-align: center;
          }
          .resultSpan {
            flex: 1;
            text-align: right;
          }
        }
      }

      .copyright {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: ${fontFamily.description};
        text-align: center;
        padding: 10px;

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
      width: 65%;
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
            font-size: 3.4rem;
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
            margin-left: 1rem;

            h1 {
              font-size: 2.4rem;
            }
            p {
              font-weight: 600;
              line-height: 1.6;
              font-size: 19px;
            }

            em {
              position: relative;
              font-size: 16px;

              .windIcon {
                color: grey;
                position: absolute;
                top: 0;
                margin-left: 6px;
                font-size: 1.4rem;
              }
            }
          }

          .sideWeatherUnit {
            h1 {
              font-family: ${fontFamily.description};
              font-size: 7em;
              position: relative;
              left: 30px;
            }

            h1 > span:nth-child(1) {
              position: relative;
              bottom: 22px;
              right: 35px;
              font-size: 0.8em;
              padding: 10px;
              font-family: ${fontFamily.description};
            }

            span:nth-child(2) {
              font-size: 0.5em;
              position: relative;
              bottom: 65px;
              right: 70px;
              font-family: ${fontFamily.input};
            }
            p {
              font-size: 2em;
              margin-left: 10px;
              line-height: 1;
              font-family: ${fontFamily.input};
              text-align: right;
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
              margin: 5px;
              font-size: 25px;
            }
            .forecastIcon {
              font-size: 2rem;
            }
          }

          .forcastHourly {
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            position: relative;

            .heading {
              position: absolute;
              left: -9px;
              text-align: left;
              color: #fff;
              p:nth-child(1) {
                margin-top: 25px;
                font-size: 20px;
                padding-block: 1px;
                background-color: #000;
                border-radius: 0 20px 20px 0;
              }
              p:nth-child(2),
              p:nth-child(3) {
                margin-top: 3rem;
                padding-right: 14px;
                background-color: #000;
                border-radius: 0 20px 20px 0;
                font-size: 1.5rem;
              }
            }
          }
        }
        .minMaxWeatherHorly {
          margin-left: 30px;

          .celsiusFahr {
            font-size: 22px;
            position: absolute;
          }

          p:nth-child(1) {
            margin-top: 20px;
            font-size: 25px;
            font-family: ${fontFamily.roboto};
          }
          p {
            margin-top: 1.5rem;
            font-size: 3rem;
            font-family: ${fontFamily.description};
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
        box-shadow: 1px 1px 13px -3px rgba(255, 255, 255, 22);
        border-radius: 20px;
        padding-right: 30px;
        font-family: ${fontFamily.input};
        font-size: 18px;
        background-color: transparent;
        color: white;
      }

      .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        padding-right: 12px;
        transform: translateY(-50%);
        color: whitesmoke;
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
  //!Above 1024px till 1380px
  @media (min-width: 1024px) and (max-width: 1380px) {
    .weatherContainer {
      width: 90%;
    }
    .splitWeather {
      //!SearchWeather Styles From Here
      .leftSideBar {
        padding: 10px;
        .title {
          padding: 5px;
        }
        .searchedData {
          p {
            padding: 12px;
            margin-block: 6px;
          }
        }
      }

      //!ForcastComponent Styles From Here
      .rightSideBar {
        .forcastContainer {
          .topSectionWeather {
            .forcastDescription {
              margin-left: 0px;
            }
          }

          //! middle section for Forecasting
          .middleForcasting {
            .forcastHourly {
              .heading {
                p:nth-child(1) {
                  margin-top: 20px;
                }
                p:nth-child(2),
                p:nth-child(3) {
                  margin-top: 1.8rem;
                  font-size: 1.5rem;
                }
              }
            }
          }
          .minMaxWeatherHorly {
            p:nth-child(1) {
              font-size: 1rem;
            }
            p {
              font-size: 2rem;
            }
          }
          /* //! Bottom Section for Major Cities Weather  */
          .bottomSection {
            .citiesInfo {
              > p:nth-child(1) {
                font-size: 3rem;
              }
              > p:nth-child(2) {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
