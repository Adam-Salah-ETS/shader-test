class DbUtils {

    public async loadShaders() {
        let shadersData;
        try {
            const response = await fetch('/data/shaders.json');
            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
            }
            const json = await response.json();
            shadersData = json.shaderInfo;
        } catch (error) {
            console.log("Could not load shaders");
        }
        console.log(shadersData);
    }

}

export const dbUtils = new DbUtils();