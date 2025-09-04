import Select from "@/components/select";

export default function Home() {
  return (
    <div className="container">
      <Select
        options={[
          "Denver, USA",
          "Brisbane, Australia",
          "Amsterdam, Netherlands",
          "Gandhinagar, India"
        ]}
      />
    </div>
  );
}
