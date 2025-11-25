import { statsGet } from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AccountStats = dynamic(
  () => import("@/components/account/account-stats"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Statistics | My Account",
};

export default async function EstatisticasPage() {
  // você pode pegar imageId da URL futuramente
  const imageId = "b9f"; 

  const { data } = await statsGet(imageId);

  return (
    <section>
      <AccountStats data={data} />
    </section>
  );
}
