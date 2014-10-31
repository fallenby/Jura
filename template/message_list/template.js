if (Meteor.isClient)
{
    Template.message_list.helpers({
        messages: function() {
            return Messages.find({ room: Session.get('room') });
        }
    });
}
