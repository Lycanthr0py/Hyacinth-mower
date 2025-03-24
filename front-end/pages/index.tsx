import Head from "next/head";
import BatteryDisplay from "@components/displays/BatteryDisplay";
import LocatorDisplay from "@components/displays/LocatorDisplay";

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>

            <main>
                <div className="flex flex-col">
                    <LocatorDisplay/>
                    <BatteryDisplay percentage={20}/>
                </div>
            </main>
        </>
    )
}