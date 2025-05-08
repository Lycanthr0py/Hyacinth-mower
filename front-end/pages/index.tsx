import Head from "next/head";
import AllDisplay from "@components/displays/AllDisplay";
import Header from "@components/header/Header";

const sampleData = [
    { time: '06:00', distance: 200 },
    { time: '07:00', distance: 1000 },
    { time: '08:00', distance: 0 },
    { time: '09:00', distance: 300 },
    { time: '10:00', distance: 600 },
    { time: '11:00', distance: 300 },
    { time: '12:00', distance: 100 },
    { time: '13:00', distance: 500 },
    { time: '14:00', distance: 500 },
    { time: '15:00', distance: 800 },
    { time: '16:00', distance: 0 },
    { time: '17:00', distance: 1000 },
    { time: '18:00', distance: 500 },
];

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <Header/>

            <main className="flex flex-row items-start gap-8">
                <div className="flex flex-row items-start gap-8">
                    <AllDisplay battery={75} data={sampleData} status={4}/>
                </div>
            </main>
        </>
    )
}