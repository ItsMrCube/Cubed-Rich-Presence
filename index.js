const RPC = require("discord-rpc");
const { clientId } = require("./config");

const client = new RPC.Client({ transport: "ipc" });

client.on("ready", () => {
  console.info("Client is ready!");

  client
    .setActivity({
      details: "Cubed Rich Presence™",
      state: "So Cool!",
      startTimestamp: new Date(),
    })
    .catch(console.error);
});

client.login({ clientId: clientId }).catch(console.error);
