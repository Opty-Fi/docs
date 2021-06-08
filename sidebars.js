module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      id: "whitepaper",
      type: "doc",
    },
    {
      label: "Strategies",
      type: "category",
      items: ["strategies/definitions", "strategies/strategies"],
    },
    {
      label: "Opty Token",
      type: "category",
      items: ["opty-token/tokenmics"],
    },
    {
      label: "Governance",
      type: "category",
      items: ["governance/constitution", "governance/voting-process"],
    },
    {
      label: "Developers",
      type: "category",
      items: [
        "developers/deployed-contracts",
        {
          label: "Interface",
          type: "category",
          items: [
            "developers/interface/ivault",
            "developers/interface/iadapter",
            "developers/interface/iregistry",
            "developers/interface/irisk",
            "developers/interface/istrategy",
          ],
        },
      ],
    },
  ],
}
