@component
export class DartBoardController extends BaseScriptComponent {

    @input
    public dartHitSounds: AudioComponent;
    @input
    public dartBouncedSound: AudioComponent;
    @input
    public targetObject: SceneObject; // Add this input to reference the object to destroy

    onAwake() {
        this.dartHitSounds.playbackMode = Audio.PlaybackMode.LowLatency;
        this.dartBouncedSound.playbackMode = Audio.PlaybackMode.LowLatency;
    }

    public playDartHitSound() {
        this.dartHitSounds.play(1);
        this.destroyTargetObject(); // Call the method to destroy the object
    }

    public playDartBouncedSound() {
        this.dartBouncedSound.play(1);
         // Call the method to destroy the object
    }

    private destroyTargetObject() {
        if (this.targetObject) {
            this.targetObject.destroy();
        }
    }
}