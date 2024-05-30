import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[393px] h-[725px] bg-[#f8d5d5]">
          <button className=" ml-6 mt-11" onClick={() => navigate("/")}>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58576 10.6092L10.2929 18.0184L11.7071 16.815L5.41418 11.4601L22 11.4601L22 9.75822L5.41418 9.75822L11.7071 4.40335L10.2929 3.19994L1.58576 10.6092Z"
                fill="#8E8E8E"
              />
            </svg>
          </button>
          <div className=" ml-5 mr-10 mt-20">
            <strong className=" mb-1">Let's Sign you up.</strong>
            <p className=" mb-8 text-[#666666]">welcome to getogether</p>

            <form className="flex flex-col w-full">
              <label className="flex flex-col mb-4">
                Name
                <input
                  type="text"
                  className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                  value={name}
                  onChange={handleNameChange}
                />
              </label>
              <label className="flex flex-col mb-4">
                Email
                <input
                  type="email"
                  className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <label className="flex flex-col mb-4">
                Password
                <input
                  type="password"
                  className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <label className="flex flex-col mb-4">
                Confirm Password
                <input
                  type="password"
                  className=" p-2 mt-1 rounded bg-[#ffe6e6] "
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </label>
              <button
                className="bg-[#fa7f84] text-[#fdccd5] rounded-2xl py-4 px-20  mt-9"
                type="button"
                onClick={() => navigate("/chat")}
              >
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
