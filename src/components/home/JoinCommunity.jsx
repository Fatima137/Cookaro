const JoinCommunity = () => {
  const stats = [
    { value: "8k+", label: "Total Recipes" },
    { value: "10k+", label: "Community Members" },
    { value: "245", label: "Active Forum Topics" },
    { value: "100+", label: "Professional Chefs Featured" },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 bg-gray-100 rounded-lg my-12">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Join Our Foodie Community</h2>
        <button className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
          Sign Up for Newsletter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl sm:text-4xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinCommunity;