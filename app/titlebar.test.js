const customTitlebar = require('custom-electron-titlebar');
      const titlebar = new customTitlebar.Titlebar({
          backgroundColor: customTitlebar.Color.fromHex('#333'),
          menu: false,
          titleHorizontalAlignment: "left",    
          unfocusEffect: false,
          title: "Multistream",
      });
      titlebar.updateBackground("#202225")