import { Typography } from "./ui/typography";
import { Minititle } from "./minititle";
export default function Ighubprogramgrid() {
    return (
        <div>

            <section className="md:px-6 px-0 max-w-[1440px] mx-auto">
                <Minititle>We are also:</Minititle>
                <div className="mb-16 text-center">
                    <Typography variant="h2" weight="medium" className="text-gray-900 mb-4">Mobilizing the Next Generation of <br />Innovators and Digital Leaders</Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">


                    <div className="md:col-span-8 bg-brand-green rounded-[2.5rem] p-10 relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="my-auto">
                                <Typography variant="h3" className="text-white mb-4">Developers and Netpreneurs Fellowship</Typography>
                                <Typography variant="body" className="text-white/60">
                                    Our flagship 6-month digital skills program for out-of-school youths looking to build careers in tech. Participants undergo three months of intensive learning, followed by a three-month industry internship to gain hands-on experience.
                                </Typography>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform" />
                    </div>


                    <div className="md:col-span-4 bg-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-brand-orange/10 transition-colors">
                        <div>
                            <Typography variant="h4" className="text-brand-purple mb-2">Kids Code Camp</Typography>
                            <Typography variant="body" className="text-slate-500">A dynamic program designed to introduce kids (ages 4–16) to technology and coding. Through fun and interactive learning, children gain early exposure to STEM, problem-solving, and creativity in a supportive environment.</Typography>
                        </div>
                    </div>


                    <div className="md:col-span-4 bg-brand-green/10 rounded-[2.5rem] p-10 flex flex-col justify-between border border-brand-green/20">
                        <div>
                            <Typography variant="h4" className="text-brand-purple mb-2">IGHub BizBoost</Typography>
                            <Typography variant="body" className="text-slate-500">A startup incubation program designed to help early-stage entrepreneurs build, launch, and scale their businesses. Through mentorship, resources, and funding support, BizBoost accelerates startup growth.</Typography>
                        </div>
                    </div>


                    <div className="md:col-span-8 bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <Typography variant="h3" className="text-white">Tech Tribe</Typography>
                        </div>
                        <div className="absolute bottom-0 right-0 p-8 opacity-20">
                            {/* <Typography variant="h1" className="text-white text-8xl">COMMUNITY</Typography> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}