import { Outlet } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";
import shape from "../assets/images/shapes/ccchaos.svg";
import { t } from "i18next";

const AuthLayout = () => {
  return (
    <section
      className={`w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 dark:bg-dark-active`}
    >
      <div className="relative order-1 lg:order-none dark:bg-primary">
        <div className="w-full min-h-screen bg-blue-200 dark:bg-primary-active flex justify-center items-center">
          <div className="w-[75%] bg-cover auth-bg bg-no-repeat max-w-[600px] my-5 flex z-0 shadow-md bg-white/10 dark:bg-dark/30 backdrop-blur-md rounded-lg overflow-hidden">
            <div className="w-full p-3 md:px-5 flex flex-col gap-y-5">
              {<Outlet />}
            </div>
          </div>
        </div>
        <div
          className={`w-full absolute bottom-0 dark:bg-dark/30 flex justify-center gap-10 text-sm text-primary font-medium p-6 dark:bg-dark-active`}
        >
          <p
            role="button"
            className="dark:hover:text-primary-light duration-300 transition-colors"
          >
            {t("link.terms")}
          </p>
          <p
            role="button"
            className="dark:hover:text-primary-light duration-300 transition-colors"
          >
            {t("link.plans")}
          </p>
          <p
            role="button"
            className="dark:hover:text-primary-light duration-300 transition-colors"
          >
            {t("link.contact_us")}
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center bg-cover bg-no-repeat overflow-hidden">
        <img src={shape} className="absolute lg:w-[500px] xl:w-[640px]" />

        <div className="bg-white/10 w-full h-full backdrop-blur-sm p-10 flex flex-col justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-1/2 mx-auto hover:scale-105 duration-300"
          />
          <h3 className="lg:text-2xl md:text-xl text-lg text-primary mt-10 font-semibold text-center">
            {t("hero.title")}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
