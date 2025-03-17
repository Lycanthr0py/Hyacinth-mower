import Head from "next/head";
import BatteryDisplay from "@components/displays/BatteryDisplay";

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>

            <main>
                <div>
                    <BatteryDisplay percentage={100}/>
                </div>
            </main>
        </>
    )
}