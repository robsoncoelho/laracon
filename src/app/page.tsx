import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <div className="container">
      <Dropdown
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
