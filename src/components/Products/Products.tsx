import ProductCard from "../ui/ProductCard";

export default function Products() {
  return (
    <section className="flex flex-col items-start gap-[10px] self-stretch bg-black px-[70px] py-[130px]">
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex flex-col items-start gap-[8px]">
          <h1 className="text-center text-size-2 font-medium">Our Products</h1>
        </div>

        <div className="flex w-[1299px] items-center gap-[24px]">
          <ProductCard
            title="Traffic Management"
            subtitle="Manage City Traffic with AI"
            description="InLights revolutionizes your planning with advanced forecasting tools. Anticipate needs, schedule proactively, and optimize resources to keep operations running smoothly."
            imageSrc="/products/management_city_traffic_with_ai.png"
          />

          <ProductCard
            title="Traffic Management"
            subtitle="Manage who Enters your Premises"
            description="InLights revolutionizes gate security with a cutting-edge solution that fuses AI-driven vehicle identification, CNIC scanning, and real-time tracking for unmatched access control and theft prevention."
            imageSrc="/products/manage_who_enters_your_premises.png"
          />
        </div>
      </div>
    </section>
  );
}
