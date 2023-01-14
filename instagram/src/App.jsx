import "./App.css";
import { useEffect, useRef } from "react";
function App() {
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const slider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    slider();
    const interval = setInterval(slider, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <>
      <div className="flex justify-center relative items-center h-full w-full">
        <div
          className="absolute top-[57px] mr-[280px] w-[250px] h=[538px] "
          ref={ref}
        >
          <img
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            className="absolute  w-full top-0 left-0 opacity-0 transition-opacity transition-duration-700 ease-in"
            alt=""
          />
          <img
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            className="absolute  w-full top-0 left-0 opacity-0 transition-opacity transition-duration-700 ease-in "
            alt=""
          />
          <img
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            className="absolute  w-full top-0 left-0 opacity-0 transition-opacity transition-duration-700 ease-in"
            alt=""
          />
          <img
            src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            className="absolute  w-full top-0 left-0 opacity-0 transition-opacity transition-duration-700 ease-in"
            alt=""
          />
        </div>
        <div className="h-[630px] mt-8 ">
          <img
            src="https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
            className="h-full"
            alt=""
          />
        </div>
        <div className="flex items-center flex-col px-12 py-12 mt-8 border-1 border-gray-300 border-solid">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            className="block"
            alt=""
          />
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              placeholder="Phone number e-mail"
              id=""
              className="inline-block border-solid border-gray-600 mb-4 mt-4 w-[200px]"
            />
            <input type="password" placeholder="Password" />
          </div>
          <button className=" m-4 !bg-blue-400 font-bold !text-neutral-300 px-4 py-4 rounded-lg">Log In</button>

          <span>------------  OR  ------------ </span>
          <div>
            <div className="flex mt-4">
              <img
                src="../public/img/facebook (2).png"
                className="w-[20px] mr-2"
                alt=""
              />
              <span> Facebook ile giriş yap</span>
            </div>
          </div>
          <p className="mt-4">Şifreni mi unuttun?</p>

          <div className="bg-gray-200">
            <p className="mt-4">
              Hesabın mı yok? <a href="!text-sky-400/100">Kaydol</a><br /><br /> 
            </p>
          </div>

          <a href="" className="mt-4">
            Uygulamayı indir
          </a>

          <div className="flex">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png"
              className="w-[140px]  mt-6"
              alt=""
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
              className="w-[140px] mt-6"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
