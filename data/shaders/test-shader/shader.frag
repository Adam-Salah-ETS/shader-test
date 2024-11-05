uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

struct vec5 {
	float x;
	float y;
	float z;
	float w;
	float q;
};

float sum(float a, float b) {
	return a + b;
}

void main() {
	vec3 color = vec3(1,1,1);

	color.rg = vec2(0, 0);

	gl_FragColor = vec4(color, 1);
}
