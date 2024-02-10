import { SendForm } from "./send-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-32 py-20">
      <div className="pt-3">
        <SendForm />
      </div>
    </main>
  );
}
