import Link from "next/link";
import versions  from "@/data/versions.json";
import { Alert } from "@/components/Alert";

export const ViewLatestVersion = () => {
    return (
        <Alert type={"warning"} title={"Warning"}>
            You&apos;re browsing the documentation for an old version of Webiny. Consider upgrading
            your project to Webiny{" "}
            <Link href={"/docs/get-started/install-webiny"}>{versions.latestVersion}</Link>.
        </Alert>
    );
};
