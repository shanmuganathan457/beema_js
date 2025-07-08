export default function Footer() {
  return (
    <div className="w-full sm:px-4 lg:px-0 lg:w-[1480px] lg:h-[550px]">
      <div className="flex justify-center items-center w-full lg:w-[1480px] h-max lg:max-h-[400px] my-9 rounded-[32px] border-1 border-white bg-transparent bg-blend-color-burn">
        <div className="flex flex-col py-10 px-6 mx-4 my-14 w-full">
          <div className="grid grid-cols-2 sm:flex flex-wrap justify-between gap-6 sm:gap-10 text-gray-700 w-full">

            {/* Column 1 */}
            <div className="min-w-[150px]">
              <h3 className="font-futura mb-3 text-black text-[18px]">Insurance</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Car</li>
                <li>Home insurance</li>
                <li>Travel</li>
                <li>Domestic Insurance</li>
                <li>Individual Life Insurance</li>
                <li>Marine Pleasure Yacht</li>
                <li>Caravan</li>
                <li>Motorcycle</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="min-w-[150px]">
              <h3 className="font-futura mb-3 text-black text-[18px]">Other Services</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Renew Policy</li>
                <li>Intimate Claim</li>
                <li>About retail claims</li>
                <li>Get Police Report</li>
                <li>Auction</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="min-w-[150px]">
              <h3 className="font-futura mb-3 text-black text-[18px]">Support</h3>
              <ul className="space-y-2 text-[14px]">
                <li>FAQs</li>
                <li>Sitemap</li>
                <li>Contact Us</li>
                <li>Register a Complaint</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="min-w-[150px]">
              <h3 className="font-futura mb-3 text-black text-[18px]">Sign In</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Customers</li>
                <li>Employee</li>
                <li>Brokers & Agents</li>
                <li>Workshops</li>
              </ul>
            </div>

            {/* Column 5: QR Code + App Info */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col sm:flex-row gap-6 justify-center items-center md:items-start">
              {/* QR Code */}
              <div className="rounded-3xl border-[1.5px] bg-blend-color-burn border-white h-[195px] w-[195px] bg-transparent p-1 flex items-center justify-center mx-auto sm:mx-0">
                <div className="bg-white rounded-3xl shadow-md w-[158.61px] h-[158.61px] flex items-center justify-center">
                  <img
                    src="/qr.png"
                    alt="QR Code"
                    className="w-[118.5px] h-[118.5px] object-cover"
                  />
                </div>
              </div>

              {/* App Info & Socials */}
              <div className="space-y-4 text-center sm:text-left">
                <h2 className="text-[18px] font-bold leading-[30px] font-futura text-gray-900">Get Our App</h2>
                <p className="text-gray-700 font-medium leading-[20px] text-[13px]">Scan the QR Code to Download Now!</p>
                <p className="text-gray-600 font-medium text-[13px] leading-[20px]">
                  Damaan Islamic Insurance Company<br />
                  -BEEMA (<span className="font-semibold">*** Regulated by QCB***</span>)
                </p>

                {/* Social Icons */}
                <div className="flex justify-center sm:justify-start gap-4 mt-2">
                  <div className="w-[36px] h-[36px] rounded-full shadow bg-[url('/fb.svg')] bg-no-repeat bg-center bg-[length:9px]"></div>
                  <div className="w-[36px] h-[36px] rounded-full shadow bg-[url('/insta.svg')] bg-no-repeat bg-center bg-[length:16px]"></div>
                  <div className="w-[36px] h-[36px] rounded-full shadow bg-[url('/lin.svg')] bg-no-repeat bg-center bg-[length:15px]"></div>
                  <div className="w-[36px] h-[36px] rounded-full shadow bg-[url('/x.svg')] bg-no-repeat bg-center bg-[length:17px]"></div>
                </div>

                <p className="text-sm text-gray-500 pt-2">web v 1.2.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
