import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Bye: Command = {
    name: "bye",
    description: "Returns a goodbye",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Bye!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};