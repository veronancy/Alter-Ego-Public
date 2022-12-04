const mongo = require('./mongo')
const welcomeSchema = require('./schemas/welcomeSchema')
const profileSchema = require('./schemas/welcomeSchema')
const settingsSchema = require('./schemas/settings-schema')
const afkSchema = require('./schemas/afk-schema')
const roleMessageSchema = require('./schemas/roleMessage')



const welcomeCache = {} // { 'guildId-userId': coins }
const textCache = {} // { 'guildId-userId': coins }
const channelCache = {} // { 'guildId-userId': coins }
const imageCache = {} // { 'guildId-userId': coins }
const toggleCache = {}
const goodbyeCache = {} // { 'guildId-userId': coins }
const textCache2 = {} // { 'guildId-userId': coins }
const channelCache2 = {} // { 'guildId-userId': coins }
const imageCache2 = {} // { 'guildId-userId': coins }
const roleCache = {} // { 'guildId-userId': coins }
const levelCache = {} // { 'guildId-userId': coins }'
const afkCache = {}










module.exports = (client) => {}


module.exports.setTitle = async (guildId, title) => {
  //module.exports.addCoins = async (guildId, userId, coins) => {
 

      const result = await welcomeSchema.findOneAndUpdate(
        {
         // guildId,
          guildId,
        },
        {
          //guildId,
          guildId,
          title,
          
        },
        {
          upsert: true,
          new: true,
        }
      )


      welcomeCache[`${guildId}`] = result.title
      //coinsCache[`${guildId}-${userId}`] = result.coins

      return result.title
    
}

module.exports.getTitle = async (guildId) => {
  const cachedValue = welcomeCache[`${guildId}`]
 // module.exports.getCoins = async (guildId, userId) => {
 //   const cachedValue = coinsCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }


      const result = await welcomeSchema.findOne({
       // guildId,
        guildId,
      })


      let title = "Welcome!"
      if (result.title) {
        title = result.title
      } else {
        await new welcomeSchema({
          //guildId,
          guildId,
          title,
        }).save()
      }
     // coinsCache[`${guildId}-${userId}`] = coins

      welcomeCache[`${guildId}`] = title

      return title
    
}

module.exports.setText = async (guildId, text) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            text,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        textCache[`${guildId}`] = result.text
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.text
      
  }
  
  module.exports.getText = async (guildId) => {
    const cachedValue = textCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let text = "Please view ?welcomehelp for help editing the welcome screen!\nTo mention a member, put <@${member.id}> as a placeholder."
        if (result.text) {
          text = result.text
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            text,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        textCache[`${guildId}`] = text
  
        return text
      
  }

  module.exports.setImage = async (guildId, image) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            image,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        imageCache[`${guildId}`] = result.image
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.image
      
  }
  
  module.exports.getImage = async (guildId) => {
    const cachedValue = imageCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let image = "https://media.discordapp.net/attachments/777441872423550976/801957941149302824/81d83c62e2907a1519dbdc3fe4b447f2.gif"
        if (result.image) {
          image = result.image
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            image,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        imageCache[`${guildId}`] = image
  
        return image
      
  }
  module.exports.setChannel = async (guildId, channel) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            channel,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        channelCache[`${guildId}`] = result.channel
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.channel
      
  }
  
  module.exports.getChannel = async (guildId) => {
    const cachedValue = channelCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let channel = "default"
        if (result.channel) {
          channel = result.channel
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            channel,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        channelCache[`${guildId}`] = channel
  
        return channel
      
  }

  module.exports.setGoodbyeChannel = async (guildId, goodbyechannel) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            goodbyechannel,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        // channelCache[`${guildId}`] = result.channel
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.goodbyechannel
      
  }
  
  module.exports.getGoodbyeChannel = async (guildId) => {
    // const cachedValue = channelCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    // if (cachedValue) {
    //   return cachedValue
    // }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let goodbyechannel = "default"
        if (result.goodbyechannel) {
          goodbyechannel = result.goodbyechannel
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            goodbyechannel,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        // channelCache[`${guildId}`] = channel
  
        return goodbyechannel
      
  }

  module.exports.setReactions = async (guildId, channelId, reactions) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await settingsSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
            channelId,
          },
          {
            //guildId,
            guildId,
            channelId,
            reactions,
  
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
      //   reactionCache[`${guildId}`] = result.reactions
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.reactions
      
  }
  
  module.exports.getReactions = async (guildId, channelId) => {
    const cachedValue = reactionCache[`${guildId}-${channelId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  
  
        const result = await settingsSchema.findOne({
         // guildId,
          guildId,
          channelId,
        })
  
  
        let toggle = 0
          if (result) {
            toggle = result.toggle
          } else {
            await new welcomeSchema({
              //guildId,
              guildId,
              toggle,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
      //    reactionCache[`${guildId}-${channelId}`] = result.reactions
  
        return toggle
      
  }

  // toggle

  module.exports.setEnable = async (guildId, toggle) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            toggle,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        // imageCache[`${guildId}`] = result.image
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.toggle
      
  }
  
  module.exports.getEnable = async (guildId) => {
    const cachedValue = toggleCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    // if (cachedValue) {
    //   return cachedValue
    // }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let toggle = 0
        if (result) {
          toggle = result.toggle
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            toggle,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        // imageCache[`${guildId}`] = image
  
        return toggle
      
  }
  module.exports.setEnableGoodbye = async (guildId, toggleGoodbye) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            toggleGoodbye,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        // imageCache[`${guildId}`] = result.image
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.toggleGoodbye
      
  }
  
  module.exports.getEnableGoodbye = async (guildId) => {
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    // if (cachedValue) {
    //   return cachedValue
    // }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let toggleGoodbye = 0
        if (result) {
          toggleGoodbye = result.toggleGoodbye
        } else {
          await new profileSchema({
            //guildId,
            guildId,
            toggleGoodbye,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        // imageCache[`${guildId}`] = image
  
        return toggleGoodbye
      
  }


  // Goodbye Despair

  module.exports.setTitle2 = async (guildId, title2) => {
    //module.exports.addCoins = async (guildId, userId, coins) => {
   
  
        const result = await welcomeSchema.findOneAndUpdate(
          {
           // guildId,
            guildId,
          },
          {
            //guildId,
            guildId,
            title2,
            
          },
          {
            upsert: true,
            new: true,
          }
        )
  
  
        goodbyeCache[`${guildId}`] = result.title2
        //coinsCache[`${guildId}-${userId}`] = result.coins
  
        return result.title2
      
  }
  
  module.exports.getTitle2 = async (guildId) => {
    const cachedValue = goodbyeCache[`${guildId}`]
   // module.exports.getCoins = async (guildId, userId) => {
   //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    if (cachedValue) {
      return cachedValue
    }
  
  
        const result = await welcomeSchema.findOne({
         // guildId,
          guildId,
        })
  
  
        let title2 = "Goodbye!"
        if (result.title2) {
          title2 = result.title2
        } else {
          await new welcomeSchema({
            //guildId,
            guildId,
            title2,
          }).save()
        }
       // coinsCache[`${guildId}-${userId}`] = coins
  
        goodbyeCache[`${guildId}`] = title2
  
        return title2
      
  }
  
  module.exports.setText2 = async (guildId, text2) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await welcomeSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              text2,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          textCache2[`${guildId}`] = result.text2
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.text2
        
    }
    
    module.exports.getText2 = async (guildId) => {
      const cachedValue = textCache2[`${guildId}`]
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
      if (cachedValue) {
        return cachedValue
      }
    
    
          const result = await welcomeSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let text2 = "Please view ?goodbyehelp for help editing the goodbye screen!"
          if (result.text2) {
            text2 = result.text2
          } else {
            await new profileSchema({
              //guildId,
              guildId,
              text2,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          textCache2[`${guildId}`] = text2
    
          return text2
        
    }
  
    module.exports.setImage2 = async (guildId, image2) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await welcomeSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              image2,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          imageCache2[`${guildId}`] = result.image2
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.image2
        
    }
    
    module.exports.getImage2 = async (guildId) => {
      const cachedValue = imageCache2[`${guildId}`]
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
      if (cachedValue) {
        return cachedValue
      }
    
    
          const result = await welcomeSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let image2 = "https://images-ext-1.discordapp.net/external/TiUc9jA0Y1AcbJwThhtF70RdvVszpAi8qk2CaFKFkOk/https/i.pinimg.com/originals/ac/b2/a1/acb2a18de39446e48718b5250cb7a754.gif"
          if (result.image2) {
            image2 = result.image2
          } else {
            await new profileSchema({
              //guildId,
              guildId,
              image2,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          imageCache2[`${guildId}`] = image2
    
          return image2
        
    }

    // autorole

    module.exports.setAutorole = async (guildId, role) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await welcomeSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              role,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          // textCache[`${guildId}`] = result.text
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.role
        
    }
    
    module.exports.getAutorole = async (guildId) => {
      const cachedValue = roleCache[`${guildId}`]
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
      // if (cachedValue) {
      //   return cachedValue
      // }
    
    
          const result = await welcomeSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let role = "default"
          if (result.role) {
            role = result.role
          } else {
            await new profileSchema({
              //guildId,
              guildId,
              role,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          // roleCache[`${guildId}`] = role
    
          return role
        
    }

    // Enable/Disable Levels

    module.exports.setEnabledLevels = async (guildId, enabled) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
        console.log(enabled)
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              enabled,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          //coinsCache[`${guildId}-${userId}`] = result.coins
          console.log(result.enabled)

          return result.enabled
        
    }
    
    module.exports.getEnabledLevels = async (guildId) => {
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
     
    
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let enabled = 0
          if (result) {
            enabled = result.enabled
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              enabled,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
    
          return enabled
        
    }

    module.exports.setAntispam = async (guildId, antispam) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
        console.log(antispam)
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              antispam,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          //coinsCache[`${guildId}-${userId}`] = result.coins
          console.log(result.antispam)

          return result.antispam
        
    }
    
    module.exports.getAntispam = async (guildId) => {
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
     
    
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let antispam = 0
          if (result) {
            antispam = result.antispam
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              antispam,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
    
          return antispam
        
    }

    // Starboard

    module.exports.setStarboard = async (guildId, starboard) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              starboard,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          // channelCache[`${guildId}`] = result.channel
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.starboard
        
    }
    
    module.exports.getStarboard = async (guildId) => {
      // const cachedValue = channelCache[`${guildId}`]
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
      // if (cachedValue) {
      //   return cachedValue
      // }
    
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let starboard = "default"
          if (result.starboard) {
            starboard = result.starboard
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              starboard,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          // channelCache[`${guildId}`] = channel
    
          return starboard
        
    }

    module.exports.setAFK = async (guildId, userId, reason, afk) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await afkSchema.findOneAndUpdate(
            {
              guildId,
              userId,
            },
            {
              guildId,
              userId,
              reason,
              afk
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          // channelCache[`${guildId}`] = result.channel
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.reason
        
    }
    
    module.exports.getAFK = async (guildId, userId) => {
     
      
    
    
          const result = await afkSchema.findOne({
           guildId,
            userId,
          })
    
    
          let reason = "No reason provided."
          if (result.reason) {
            reason = result.reason
          } else {
            await new afkSchema({
              guildId,
              userId,
              reason,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          // channelCache[`${guildId}`] = channel
    
          return reason
        
    }
 

    // Enable / Disable Say

    module.exports.setSay = async (guildId, say) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              say,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.say
        
    }
    
    module.exports.getSay = async (guildId) => {
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    
    
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let say = 0
          if (result) {
            say = result.say
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              say,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
    
          return say
        
    }

    module.exports.setLog = async (guildId, log) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              log,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.log
        
    }
    
    module.exports.getLog = async (guildId) => {
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
    
    
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let log = 0
          if (result) {
            say = result.log
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              log,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
    
          return log
        
    }

    module.exports.setLogChannel = async (guildId, channel) => {
      //module.exports.addCoins = async (guildId, userId, coins) => {
     
    
          const result = await settingsSchema.findOneAndUpdate(
            {
             // guildId,
              guildId,
            },
            {
              //guildId,
              guildId,
              channel,
              
            },
            {
              upsert: true,
              new: true,
            }
          )
    
    
          //coinsCache[`${guildId}-${userId}`] = result.coins
    
          return result.channel
        
    }
    
    module.exports.getLogChannel = async (guildId) => {
     // module.exports.getCoins = async (guildId, userId) => {
     //   const cachedValue = coinsCache[`${guildId}-${userId}`]
      
    
          const result = await settingsSchema.findOne({
           // guildId,
            guildId,
          })
    
    
          let channel = "default"
          if (result.channel) {
            channel = result.channel
          } else {
            await new settingsSchema({
              //guildId,
              guildId,
              channel,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
    
          return channel
        
    }

    // Button Roles

    module.exports.getRoleMessage = async (guildId, channelId, messageId) => {

    
          const result = await roleMessageSchema.findOne({
            guildId,
            channelId,
            messageId
          })
    
    
          let title = "Welcome!"
          if (result.title) {
            title = result.title
          } else {
            await new welcomeSchema({
              //guildId,
              guildId,
              title,
            }).save()
          }
         // coinsCache[`${guildId}-${userId}`] = coins
    
          welcomeCache[`${guildId}`] = title
    
          return title
        
    }

    