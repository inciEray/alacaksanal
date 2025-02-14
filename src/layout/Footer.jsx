import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Üst Kısım */}
      <div className="flex justify-center items-center bg-[#FAFAFA] h-auto md:h-[142px] py-6 md:py-0">
        <div className="container flex items-center w-full md:w-[1050px] h-auto md:h-[138px] border-b-1 border-[#E6E6E6] px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
            <div>
              <h3 className="text-2xl font-bold">AlacaksanAL</h3>
            </div>
            <div className="flex justify-center w-full md:w-60">
              <div className="flex gap-4 justify-between">
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

      {/* Orta Kısım */}
      <div className="flex justify-center items-center bg-[#FFFFFF]">
        <div className="container mx-4 md:mx-[48px] my-[50px] w-full md:w-[1050px] h-auto md:h-[270px]">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 my-[50px]">
            {/* Company Info */}
            <div className="flex flex-col gap-5">
              <h5 className="font-bold text-[#252B42]">Şirket Bilgileri</h5>
              <div className="flex flex-col gap-2 text-[#737373] font-bold">
                <Link to="/about">Hakkımızda</Link>
                <Link to="/carrier">Kariyer</Link>
                <Link to="/hiring">İşe alım yapıyoruz</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-5">
              <h5 className="font-bold text-[#252B42]">Yasal</h5>
              <div className="flex flex-col gap-2 text-[#737373] font-bold">
                <Link to="/about">Hakkımızda</Link>
                <Link to="/carrier">Kariyer</Link>
                <Link to="/hiring">İşe alım yapıyoruz</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              <h5 className="font-bold text-[#252B42]">Özellikler</h5>
              <div className="flex flex-col gap-2 text-[#737373] font-bold">
                <Link to="/business-marketing">Ticari Pazarlama</Link>
                <Link to="/user-analytic">Kullanıcı Analitiği</Link>
                <Link to="/live-chat">Canlı Sohbet</Link>
                <Link to="/unlimited-support">Sınırsız Destek</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-5">
              <h5 className="font-bold text-[#252B42]">Kaynaklar</h5>
              <div className="flex flex-col gap-2 text-[#737373] font-bold">
                <Link to="/ios-android">IOS & Android</Link>
                <Link to="/watch-demo">Demoyu İzleyin</Link>
                <Link to="/customers">Müşteriler</Link>
                <Link to="/api">API</Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-5">
              <h5 className="font-bold text-[#252B42]">İletişime Geçin</h5>
              <div>
                <div className="h-[58px] w-full md:w-[321px] border-2 border-[#E6E6E6] flex justify-between rounded-md mb-2.5">
                  <input
                    className="flex p-[15px] text-[14px] placeholder:text-[#737373] w-full"
                    type="text"
                    placeholder="Mail Adresiniz"
                  />
                  <button className="w-[117px] bg-[#23A6F0] rounded-r-md text-[14px] text-[#FFFFFF]">
                    Kaydol
                  </button>
                </div>
                <p className="text-[#737373]">AlacaksanAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex justify-center items-center bg-[#FAFAFA] h-auto md:h-[74px] py-4 md:py-0">
        <div className="container mx-4 md:mx-[48px] my-[50px] w-full md:w-[1050px]">
          <div className="flex justify-center md:justify-between w-full md:w-[600px] h-auto md:h-[24px] text-[#737373] font-bold">
            <h6>Made With Love by “AlacaksanAL” Tüm Hakları Saklıdır</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;