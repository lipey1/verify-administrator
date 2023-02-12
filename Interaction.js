// Use o código abaixo no seu InteractionCreate
// Caso tenha algum erro no código entre em contato com lipeyzin#0001

        if (interaction.guild) {

            let finalRoles;
            let roles = interaction.guild.roles.cache.forEach(async (role) => {

                let cargos = interaction.guild.roles.cache.get(role.id)


                if (cargos.permissions.toArray().includes('Administrator') && cargos.members.find(m => m.user.id === client.user.id) !== undefined) {

                    finalRoles = cargos

                }

                return
            })


            if (finalRoles === undefined) {

                const bot_link = new Discord.ActionRowBuilder().addComponents([
                    new Discord.ButtonBuilder()
                        .setStyle(Discord.ButtonStyle.Link)
                        .setURL(`https://discord.com/api/oauth2/authorize?client_id=969301039515852880&permissions=8&scope=bot%20applications.commands`)
                        .setLabel("Convidar")
                        .setDisabled(false)
                ]);

                const embed_norole = new Discord.EmbedBuilder()
                    .setDescription(`❌  *Eu não possuo nenhum cargo com a permissão de **Administrador**, caso queira criar um meu, que vem por padrão junto a mim, me retire do servidor e me coloque novamente usando o botão abaixo, lembre-se de deixar a permissão de **Administrador***`)
                    .setColor("#2f3136")

                return interaction.reply({ embeds: [embed_norole], components: [bot_link], ephemeral: true });

            }

        }

       // Simplificado (bem menor kk)


        if (!interaction.guild.members.me.permissions.has('Administrator')) {

            let embedNoPerm = new Discord.EmbedBuilder()
                .setColor('#FF0000')
                .setDescription(`❌  *Para o meu bom funcionamento eu necessito da permisão de **Administrador**, após me conceder a permissão tente novamente.*`)

            return interaction.reply({ embeds: [embedNoPerm], ephemeral: true }).catch(() => {
                return interaction.followUp({ embeds: [embedNoPerm], ephemeral: true }).catch(() => { })
            })
        }
