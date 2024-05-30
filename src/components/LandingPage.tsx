const LandingPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[393px] h-[725px] bg-[#fdcdcd]">
        <p className="text-4xl w-[302px] h-fit mt-16 ml-7">
          Stream-line Your Event Planning with Our All-in-One Management App
        </p>
        <p className="w-[203px] text-xs ml-7 mt-5">
          Communication between hosts, guests and vendors and much more...
        </p>
        <button className="bg-[#fa7f84] text-[#fdccd5] rounded-2xl py-4 px-24 ml-7 mt-9">
          Sign up with Email
        </button>
        <div className="flex justify-center items-center w-[304px] h-4 ml-9 mt-5">
          <div className="border-b border-black w-28 mr-8"></div>
          <p>OR</p>
          <div className="border-b border-black w-28 ml-8"></div>
        </div>
        <button className="flex justify-center items-center bg-[#fa7f84] text-[#fdccd5] rounded-2xl py-3 px-16 ml-7 mt-5">
          <div className="flex  gap-4 ">
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 15.5C31.5 23.7694 24.5755 30.5 16 30.5C7.4245 30.5 0.5 23.7694 0.5 15.5C0.5 7.23057 7.4245 0.5 16 0.5C24.5755 0.5 31.5 7.23057 31.5 15.5Z"
                fill="#1A1A1A"
                stroke="#A8B0AF"
              />
              <path
                d="M23.7099 15.8133C23.7106 15.3038 23.6661 14.7951 23.577 14.2928H16.2975V17.1729H20.4669C20.3816 17.6328 20.201 18.0713 19.936 18.4619C19.6711 18.8524 19.3272 19.1869 18.9252 19.4453V21.3147H21.4135C22.8705 20.0134 23.7099 18.0889 23.7099 15.8133Z"
                fill="#4285F4"
              />
              <path
                d="M16.2975 23.1209C18.3805 23.1209 20.1345 22.4583 21.4135 21.3158L18.9251 19.4464C18.2326 19.9013 17.3406 20.1609 16.2975 20.1609C14.2841 20.1609 12.5752 18.846 11.9641 17.0742H9.4007V19.0008C10.0432 20.2393 11.0283 21.2804 12.2462 22.008C13.464 22.7355 14.8667 23.1208 16.2975 23.1209Z"
                fill="#34A853"
              />
              <path
                d="M11.9641 17.0749C11.641 16.1465 11.641 15.141 11.9641 14.2126V12.286H9.40071C8.86024 13.3279 8.57877 14.4777 8.57877 15.6438C8.57877 16.8098 8.86024 17.9597 9.40071 19.0015L11.9641 17.0749Z"
                fill="#FBBC04"
              />
              <path
                d="M16.2976 11.1255C17.3984 11.1081 18.4621 11.511 19.2587 12.2472L21.4619 10.1129C20.0648 8.84173 18.2141 8.14384 16.2976 8.16553C14.8668 8.16559 13.4642 8.5509 12.2463 9.27844C11.0285 10.006 10.0433 11.0471 9.40085 12.2856L11.9642 14.2122C12.5753 12.4404 14.2842 11.1255 16.2976 11.1255Z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </div>
        </button>
        <div className=" ml-32 mt-28">
          <p>
            Existing user? <strong>Log in</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
