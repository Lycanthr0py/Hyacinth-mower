import Head from "next/head";
import DataDisplay from "@components/displays/DataDisplay";
import LocatorDisplay from "@components/displays/LocatorDisplay";

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>

            <main className="flex flex-row items-start gap-8">
                <div className="flex flex-row items-start gap-8">
                    <LocatorDisplay/>
                    <DataDisplay percentage={20}/>
                </div>
            </main>
        </>
    )
}