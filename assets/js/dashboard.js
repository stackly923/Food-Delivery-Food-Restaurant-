const dashboardData = {
  customer: {
    label: "Customer Dashboard",
    nav: ["Overview", "Browse Food", "My Orders", "Favourites", "Saved Addresses", "Payments", "Support"],
    bars: [42, 58, 48, 76, 64, 88, 72],
    pie: "conic-gradient(#fe5c03 0 38%,#ff9b64 38% 66%,#ffd1b8 66% 84%,#ffe8dc 84%)",
    roleIcon: "signup-customer.webp",
    values: ["12", "Rs. 3,860", "420", "92%"]
  },
  restaurant: {
    label: "Restaurant Dashboard",
    nav: ["Business Overview", "Live Orders", "Menu Manager", "Inventory", "Revenue", "Reviews", "Restaurant Settings"],
    bars: [55, 68, 60, 82, 76, 96, 88],
    pie: "conic-gradient(#fe5c03 0 46%,#ff934f 46% 72%,#ffc09c 72% 89%,#ffe3d3 89%)",
    roleIcon: "signup-restaurant.webp",
    values: ["Rs. 84,260", "326", "4.6", "28 min"]
  },
  delivery: {
    label: "Delivery Partner Dashboard",
    nav: ["Delivery Summary", "Current Trip", "Available Orders", "Earnings", "Route History", "Ratings", "Help Centre"],
    bars: [48, 62, 58, 78, 70, 94, 86],
    pie: "conic-gradient(#087e5e 0 72%,#56d7ae 72% 91%,#d9f7ec 91%)",
    roleIcon: "signup-delivery.webp",
    values: ["Rs. 1,840", "14", "62 km", "4.9"]
  }
};

const viewCopy = {
  "Overview": ["Your complete ordering activity and savings summary.", ["Track this month's orders", "Review reward points", "See personalised food deals"]],
  "Browse Food": ["Explore restaurants, dishes, cuisines, and current offers.", ["Popular near Anna Nagar", "Top-rated dishes", "Free-delivery restaurants"]],
  "My Orders": ["Follow active deliveries and review completed purchases.", ["One order is being prepared", "Twelve completed orders", "Download order invoices"]],
  "Favourites": ["Your saved restaurants and most-loved dishes.", ["Four favourite restaurants", "Six saved dishes", "Two favourites have offers"]],
  "Saved Addresses": ["Manage delivery locations for faster checkout.", ["Home address selected", "Office address available", "Add a new delivery location"]],
  "Payments": ["Manage cards, UPI methods, refunds, and transactions.", ["UPI is the primary method", "No pending refunds", "View payment history"]],
  "Support": ["Get help with orders, payments, or delivery issues.", ["Start live chat", "Report an order issue", "Read common questions"]],
  "Business Overview": ["Monitor restaurant growth, demand, and service quality.", ["Revenue increased 14.2%", "Eighteen orders today", "Rating remains at 4.6"]],
  "Live Orders": ["Accept orders and follow every kitchen preparation stage.", ["Three new orders", "Five meals preparing", "Two pickups awaiting riders"]],
  "Menu Manager": ["Create dishes and control pricing and availability.", ["Forty-two active dishes", "Three items unavailable", "Update weekend specials"]],
  "Inventory": ["Track ingredients, usage, and low-stock warnings.", ["Rice stock is healthy", "Paneer needs restocking", "Packaging covers three days"]],
  "Revenue": ["Review settlements, fees, taxes, and earnings trends.", ["Rs. 84,260 net revenue", "Next settlement on Friday", "Download monthly statement"]],
  "Reviews": ["Read feedback and respond to customer ratings.", ["4.6 average rating", "Thirty-two new reviews", "Food quality leads feedback"]],
  "Restaurant Settings": ["Control hours, delivery radius, staff, and profile.", ["Restaurant is accepting orders", "Radius set to eight kilometres", "Four staff accounts active"]],
  "Delivery Summary": ["Review completed trips, incentives, and performance.", ["Fourteen deliveries today", "Rs. 1,840 total earnings", "98% delivered on time"]],
  "Current Trip": ["Follow pickup, route, customer, and delivery details.", ["Pickup at Spice Garden", "Destination Anna Nagar", "Estimated trip: 22 minutes"]],
  "Available Orders": ["Choose nearby assignments based on distance and payout.", ["Five nearby requests", "Highest payout Rs. 145", "Shortest route 1.8 km"]],
  "Earnings": ["Track base pay, tips, bonuses, and settlements.", ["Rs. 240 incentive earned", "Rs. 180 customer tips", "Settlement due tomorrow"]],
  "Route History": ["Review completed routes, distance, and travel time.", ["62 kilometres today", "Average trip 4.4 km", "Peak route: T. Nagar"]],
  "Ratings": ["Monitor customer feedback and service performance.", ["Current rating 4.9", "Ninety-eight positive reviews", "Communication score is excellent"]],
  "Help Centre": ["Access emergency help, order support, and partner guidance.", ["Contact partner support", "Report vehicle trouble", "Read safety guidance"]]
};

const kind = document.body.dataset.dashboard || "customer";
const d = dashboardData[kind];
const signedInEmail = localStorage.getItem("stacklyEmail") || "Please sign in";
const iconPaths = [
  "M4 11h16M5 11l7-7 7 7M7 10v10h10V10",
  "M10.5 18a7.5 7.5 0 1 1 5.3-12.8 7.5 7.5 0 0 1-5.3 12.8Zm5.5-2 4 4",
  "M6 6h15l-2 8H8L6 3H3m6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  "M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.7-7 10-7 10Z",
  "M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "M4 7h16v10H4V7Zm3 4h4m6-1v4m-2-2h4",
  "M5 6h14v10H8l-3 3V6Zm4 4h6m-6 3h4"
];
const dashIcon = (index) => `<span class="dash-nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${iconPaths[index]}"></path></svg></span>`;

document.getElementById("dashboardRoot").innerHTML = `
  <main class="dash-page dash-${kind}">
    <aside class="dash-sidebar">
      <a href="index.html"><img src="assets/images/signup-logo.webp" alt="STACKLY"></a>
      <button class="dash-menu" type="button" aria-label="Dashboard menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <p class="dash-role-label"><img src="assets/images/${d.roleIcon}" alt="">${d.label}</p>
      <nav>${d.nav.map((item, i) => `<button type="button" class="${i === 0 ? "active" : ""}" data-view="${item}">${dashIcon(i)}${item}</button>`).join("")}</nav>
      <a class="dash-home" href="index.html">Back to Home</a>
      <a class="dash-logout" href="sign-in.html">Sign Out</a>
    </aside>
    <section class="dash-workspace">
      <header><div><h1 id="dashViewTitle"></h1><p id="dashViewIntro"></p></div><div class="dash-profile"><span>${signedInEmail.slice(0, 2).toUpperCase()}</span><div><b>${signedInEmail}</b><small>${d.label.replace(" Dashboard", "")}</small></div></div></header>
      <article class="dash-view-summary"><div><small>ACTIVE PAGE</small><h2 id="dashSummaryTitle"></h2><p id="dashSummaryIntro"></p></div><img class="dash-view-image" src="assets/images/${d.roleIcon}" alt=""><ul id="dashSummaryList"></ul></article>
      <div class="dash-metrics"></div>
      <div class="dash-chart-row"><article class="dash-chart"><div class="dash-card-title"><h2></h2><span>Last 7 days</span></div><div class="dash-bars"></div></article><article class="dash-pie-card"><h2></h2><div class="dash-pie" style="background:${d.pie}"><span></span></div></article></div>
      <div class="dash-bottom-row"><article class="dash-activity"></article><article class="dash-insights"></article></div>
    </section>
  </main>`;

function renderDashboardView(title, index) {
  const copy = viewCopy[title];
  const values = d.values;
  document.getElementById("dashViewTitle").textContent = `Welcome, ${signedInEmail}`;
  document.getElementById("dashViewIntro").textContent = copy[0];
  document.getElementById("dashSummaryTitle").textContent = title;
  document.getElementById("dashSummaryIntro").textContent = copy[0];
  document.getElementById("dashSummaryList").innerHTML = copy[1].map((item) => `<li>${item}</li>`).join("");
  document.querySelector(".dash-metrics").innerHTML = [...copy[1], `${title} score`].map((label, i) => `<article><small>${label}</small><strong>${values[i]}</strong><p>${i === 3 ? "Updated performance" : "Updated live"}</p></article>`).join("");
  document.querySelector(".dash-card-title h2").textContent = `${title} Trend`;
  document.querySelector(".dash-bars").innerHTML = d.bars.map((height, i) => `<i style="height:${Math.min(98, Math.max(28, (height + index * 9 + i * index * 3) % 100))}%"><em>${["M", "T", "W", "T", "F", "S", "S"][i]}</em></i>`).join("");
  document.querySelector(".dash-pie-card h2").textContent = `${title} Distribution`;
  document.querySelector(".dash-pie span").innerHTML = `${values[0]}<small>live result</small>`;
  document.querySelector(".dash-activity").innerHTML = `<h2>${title} Activity</h2>${copy[1].map((item, i) => `<div><p><b>${item}</b><small>${i === 0 ? "Ready for action" : i === 1 ? "Recently updated" : "View complete details"}</small></p><button type="button" onclick="location.href='404.html'">View</button></div>`).join("")}`;
  document.querySelector(".dash-insights").innerHTML = `<h2>${title} Insights</h2>${copy[1].map((item, i) => `<p><b>${i + 1}</b>${item}</p>`).join("")}`;
}

renderDashboardView(d.nav[0], 0);
document.querySelectorAll(".dash-sidebar nav button").forEach((button, index) => button.addEventListener("click", () => {
  document.querySelectorAll(".dash-sidebar nav button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderDashboardView(button.dataset.view, index);
  document.querySelector(".dash-sidebar")?.classList.remove("menu-open");
  document.querySelector(".dash-menu")?.classList.remove("open");
  document.querySelector(".dash-menu")?.setAttribute("aria-expanded", "false");
  window.history.replaceState(null, "", "#" + button.dataset.view.toLowerCase().replaceAll(" ", "-"));
}));

document.querySelector(".dash-menu")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const open = document.querySelector(".dash-sidebar").classList.toggle("menu-open");
  button.classList.toggle("open", open);
  button.setAttribute("aria-expanded", String(open));
});
