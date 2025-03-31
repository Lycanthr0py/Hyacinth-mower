import Head from "next/head";
import AllDisplay from "@components/displays/AllDisplay";

export default function Homepage() {

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>

            <main className="flex flex-row items-start gap-8">
                <div className="flex flex-row items-start gap-8">
                    <AllDisplay percentage={20}/>
                </div>
            </main>
        </>
    )
}