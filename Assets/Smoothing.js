//@input SceneObject balloon
//@input SceneObject head
//@input float smoothingFactor = 0.1

var targetPosition = script.head.getTransform().getWorldPosition();
var currentPosition = script.balloon.getTransform().getWorldPosition();

function update(eventData) {
    // Calculate the new position with smoothing
    var newPosition = vec3.lerp(currentPosition, targetPosition, script.smoothingFactor);
    
    // Update the balloon's position
    script.balloon.getTransform().setWorldPosition(newPosition);
    
    // Update current position for the next frame
    currentPosition = newPosition;
}

script.createEvent("UpdateEvent").bind(update);