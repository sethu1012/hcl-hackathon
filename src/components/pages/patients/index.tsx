import ReactSpeedometer from "react-d3-speedometer";

const PatientsDashboardComponent = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
 
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 mb-10">
                <svg
                  className="h-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M160 64c-26.5 0-48 21.5-48 48l0 164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 
                                  44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5L208 112c0-26.5-21.5-48-48-48zM48 
                                  112C48 50.2 98.1 0 160 0s112 50.1 112 112l0 164.4c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1
                                   88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6L48 
                                   112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L144 208c0-8.8 7.2-16 16-16s16 7.2 16 16l0 114.7c18.6 6.6 32 24.4 32 45.3z"
                  />
                </svg>
                <p className="text-2xl">38&#176;C</p>
                <p className="text-2xl">Temperature</p>
              </div>

              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 mb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <p className="text-2xl">17.5 &nbsp; bpm</p>
                <p className="text-2xl">Raspiratory Rate</p>
              </div>
            </div>

            <div>
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 mb-10">
                <svg
                  className="h-[25px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                </svg>

                <p className="text-2xl">38&#176;C</p>
                <p className="text-2xl">Blood</p>
              </div>

              <div className=" h-[255px] block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 heart-rate">
                <ReactSpeedometer
                  minValue={0}
                  maxValue={100}
                  customSegmentStops={[0, 60, 80, 100]}
                  segmentColors={["firebrick", "gold", "limegreen"]}
                  value={93}
                  currentValueText="Heart Rate"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto ">
              <div className=" h-[255px] block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 heart-rate">
                <h2 className="mb-2 text-lg font-semibold ">
                  User Allergy Details
                </h2>
                <ul className="max-w-md space-y-1 list-disc list-inside">
                  <li>Fever</li>
                  <li>Dust allergy</li>
                  <li>Pollen allergy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 mb-10">
          <div>
            <h1 className="font-bold text-2xl">Health Tip of the Day</h1>
          </div>
          <p className="mt-10">
            Stay hydrated! Aim to drink at least 8 glass of water per day.
          </p>
        </div>
      </div>
    </>
  );
};

export default PatientsDashboardComponent;
