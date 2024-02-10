const navReducer = () => {
    return [
        {
            "name": "Le studio",
            "id": "studio",
            "link": "le-studio",
            "category": ['navigation', 'legal']
        },
        {
            "name": "Nos services",
            "id": "services",
            "link": "nos-services",
            "category": ['navigation']
        },
        {
            "name": "Nos réalisations",
            "id": "realisations",
            "link": "nos-realisations",
            "category": ['navigation']
        },
        {
            "name": "Nous contacter",
            "id": "contact",
            "link": "nous-contacter",
            "category": ['navigation', 'legal']
        },
        {
            "name": "Mentions légales",
            "id": "legal-mention",
            "link": "mentions-legales",
            "category": ['legal']
        },
        {
            "name": "Linkedin",
            "id": "linkedin",
            "link": "linkedin",
            "category": ['social']
        },
        {
            "name": "Instagram",
            "id": "instagram",
            "link": "instagram",
            "category": ['social']
        }
    ]
};




export { navReducer };