Ext.require('Ext.container.Viewport');
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'column',
            items: [
                {
        				xtype:'panel',
                   title: 'Hello Ext',
                   html : '',
				    width: 1023,
					height: 200
                },
				{
					xtype:'panel',
                   title: 'Hello Ext',
                   html : '',
				    width: 1023,
					height: 100
                }
	
            ]
        });
    }
});
