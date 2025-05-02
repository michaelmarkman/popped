@component
// @input SceneObject headBinding
// @input float smoothingFactor = 0.1

export class NewScript extends BaseScriptComponent {  
    
    let previousPosition: vec3 = script.headBinding.getTransform().getWorldPosition();
    
    function onUpdate() {
        const currentPosition: vec3 = script.headBinding.getTransform().getWorldPosition();
        const smoothedPosition: vec3 = vec3.lerp(previousPosition, currentPosition, script.smoothingFactor);
        script.headBinding.getTransform().setWorldPosition(smoothedPosition);
        previousPosition = smoothedPosition;
    }
    
    // Bind the update event
    script.createEvent("UpdateEvent").bind(onUpdate);
}