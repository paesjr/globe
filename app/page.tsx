import { ClientGlobe } from "@/components/client-globe";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="w-full">
          <h1 className="text-center text-6xl font-bold text-white mb-16">
            Interactive Globe
          </h1>
          <div className="w-full h-[600px]">
            <ClientGlobe />
          </div>
        </div>
      </main>
    </div>
  );
}
