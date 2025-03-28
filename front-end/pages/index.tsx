import Head from "next/head";
import DataDisplay from "@components/displays/DataDisplay";
import LocatorDisplay from "@components/displays/LocatorDisplay";

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>

            <main className="flex">
                <div className="">
                    <LocatorDisplay/>
                    <DataDisplay percentage={20}/>
                </div>
            </main>
        </>
    )
}