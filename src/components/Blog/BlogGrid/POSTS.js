const POSTS = [
  {
    slug: "complete-moving-checklist",
    category: "planning",
    categoryLabel: "Planning",
    title: "The Complete Moving Checklist",
    excerpt:
      "A week-by-week moving checklist to ensure nothing falls through the cracks on moving day.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    content: [
      {
        type: "paragraph",
        text: "Moving to a new home is one of life's biggest transitions, and without a solid plan, small details can snowball into stressful surprises. A well-structured checklist transforms the chaos of relocation into a manageable sequence of tasks that you can tackle one step at a time.",
      },
      {
        type: "heading",
        id: "eight-weeks-before-moving-day",
        text: "Eight Weeks Before Moving Day",
      },
      {
        type: "paragraph",
        text: "Start by researching and booking your moving company or truck rental. Reputable movers fill up quickly, especially during peak summer months, so securing a date early gives you the best selection and pricing. This is also the perfect time to begin decluttering room by room, donating items you no longer need, and holding a garage sale to lighten your load.",
      },
      {
        type: "paragraph",
        text: "Create a moving binder or digital folder to store important documents such as lease agreements, utility account numbers, and school transfer records. Having everything in one place prevents last-minute scrambling when you need to reference a confirmation number or account detail.",
      },
      {
        type: "heading",
        id: "four-weeks-before-moving-day",
        text: "Four Weeks Before Moving Day",
      },
      {
        type: "paragraph",
        text: "Begin collecting packing supplies: sturdy boxes in various sizes, packing tape, bubble wrap, and markers for labeling. Start packing non-essential rooms first, such as guest bedrooms, storage areas, and seasonal items. Label every box with its contents and the destination room in your new home to make unpacking dramatically easier.",
      },
      {
        type: "paragraph",
        text: "Notify important parties about your address change. This list includes the post office, your bank, insurance providers, subscription services, and any government agencies. Setting up mail forwarding through USPS ensures nothing slips through during the transition period.",
      },
      {
        type: "heading",
        id: "one-week-before-moving-day",
        text: "One Week Before Moving Day",
      },
      {
        type: "paragraph",
        text: "Confirm all details with your moving company, including arrival time, parking arrangements, and any special requirements for large or fragile items. Pack a \"first night\" box containing essentials you will need immediately upon arrival: toiletries, a change of clothes, phone chargers, basic kitchen supplies, and important medications.",
      },
      {
        type: "paragraph",
        text: "Defrost and clean your refrigerator, and plan meals around using up perishable food in your pantry. Disassemble furniture that needs to be broken down, keeping all hardware in labeled bags taped to the corresponding furniture piece.",
      },
      {
        type: "heading",
        id: "moving-day-itself",
        text: "Moving Day Itself",
      },
      {
        type: "paragraph",
        text: "On the big day, do a final walkthrough of every room, closet, and cabinet. Check behind doors, inside appliances, and in outdoor storage areas. Take photos of utility meters for your records, and leave behind any keys, garage openers, or access codes for the next occupant. With your checklist complete, you can drive away knowing that every detail has been handled.",
      },
    ],
  },
  {
    slug: "how-to-pack-fragile-items-safely",
    category: "packing",
    categoryLabel: "Packing",
    title: "How to Pack Fragile Items Safely",
    excerpt:
      "Expert packing techniques to keep your delicate and valuable items safe during transit.",
    date: "Feb 8, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    slug: "moving-with-pets-survival-guide",
    category: "pet care",
    categoryLabel: "Pet Care",
    title: "Moving with Pets: A Survival Guide",
    excerpt:
      "Essential tips for reducing stress and keeping your pets comfortable during a move.",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    slug: "settling-into-your-new-neighborhood",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    title: "Settling Into Your New Neighborhood",
    excerpt:
      "Practical advice for making your new neighborhood feel like home from day one.",
    date: "Jan 15, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    slug: "long-distance-moving-tips",
    category: "long distance",
    categoryLabel: "Long Distance",
    title: "Long-Distance Moving Tips",
    excerpt:
      "Everything you need to know about planning and executing a successful long-distance move.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    slug: "decluttering-before-your-move",
    category: "organization",
    categoryLabel: "Organization",
    title: "Decluttering Before Your Move",
    excerpt:
      "How to declutter effectively before moving and lighten your load for a fresh start.",
    date: "Dec 20, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&h=400&fit=crop",
    author: {
      name: "Mike Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  },
];

export default POSTS;