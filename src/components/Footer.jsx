import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterLayout from "../layout/FooterLayout";

const Footer = () => {
  return (
    <FooterLayout>
      <div className="flex justify-center items-center bg-[#FAFAFA] h-[142px]">
        <div className="container  flex items-center w-[1050px] h-[138px] border-b-1 border-[#E6E6E6]">
          <div className="flex items-center justify-between w-[1050px]">
            <div>
              <h3 className="text-2xl font-bold">AlacaksanAL</h3>
            </div>
            <div className="flex justify-center w-60">
              <div className="flex gap-4 justify-between ">
                <FaFacebook
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  size={23}
                />
                <FaInstagram
                  className="text-pink-500 hover:text-pink-700 cursor-pointer"
                  size={23}
                />
                <FaTwitter
                  className="text-blue-400 hover:text-blue-600 cursor-pointer"
                  size={23}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#FFFFFF]">
        <div className="container mx-[48px] my-[50px] w-[1050px] h-[270px]">
          <div className="row flex justify-between my-[50px]">
            <div className="flex flex-col gap-[20px]">
              <h5 className="font-bold text-[#252B42]">Company Info</h5>

              <div className="flex flex-col gap-[10px] text-[#737373] font-bold">
                <Link>About Us</Link>

                <Link>Carrier</Link>

                <Link>We are hiring</Link>

                <Link>Blog</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h5 className="font-bold text-[#252B42]">Legal</h5>

              <div className="flex flex-col gap-[10px] text-[#737373] font-bold">
                <Link>About Us</Link>

                <Link>Carrier</Link>

                <Link>We are hiring</Link>

                <Link>Blog</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h5 className="font-bold text-[#252B42]">Features</h5>

              <div className="flex flex-col gap-[10px] text-[#737373] font-bold">
                <Link>Business Marketing</Link>

                <Link>User Analytic</Link>

                <Link>Live Chat</Link>

                <Link>Unlimited Support</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h5 className="font-bold text-[#252B42]">Resources</h5>

              <div className="flex flex-col gap-[10px] text-[#737373] font-bold">
                <Link>IOS & Android</Link>

                <Link>Watch Demo</Link>

                <Link>Customers</Link>

                <Link>API</Link>
              </div>
            </div>
            <div>
              <h5 className="mb-[12px] font-bold  text-[#252B42]">Get In Touch</h5>
              <div>
                <div className=" h-[58px] w-[321px] border-2 border-[#E6E6E6] flex justify-between rounded-md mb-2.5">
                  <input
                    className="flex p-[15px] text-[14px] placeholder:text-[#737373]"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button className="w-[117px]  bg-[#23A6F0] rounded-r-md text-[14px] text-[#FFFFFF]">
                    Subscribe
                  </button>
                </div>
                  <p className="text-[#737373]">Lore imp sum dolor amit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#FAFAFA]  h-[74px]">
        <div className="container mx-[48px] my-[50px] w-[1050px]">
          <div className="row flex justify-between w-[600px] h-[24px] text-[#737373] font-bold">
            <h6>Made With Love By Ocmazun All Right Reserved</h6>
          </div>
        </div>
      </div>
    </FooterLayout>
  );
};

export default Footer;