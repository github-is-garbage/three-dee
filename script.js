function SyncRotation(Element) {
	if (!Element.m_flPitch) return;
	if (!Element.m_flYaw) return;

	Element.style.transform = `rotateX(${Element.m_flPitch}deg) rotateY(${Element.m_flYaw}deg)`;
}

function UpdateRotation(Element, DeltaPitch, DeltaYaw)
{
	Element.m_flPitch += DeltaPitch;
	Element.m_flYaw += DeltaYaw;

	SyncRotation(Element);
}

window.addEventListener("load", () => {
	const Plane = document.querySelector("#Plane");
	if (!Plane) return console.error("No plane");

	Plane.style.width = "256px";
	Plane.style.height = "256px";
	Plane.style.transformStyle = "preserve-3d";

	Plane.m_flPitch = -45;
	Plane.m_flYaw = 0;

	// test
	function Animate()
	{
		UpdateRotation(Plane, 0, 1);
		requestAnimationFrame(Animate);
	}

	Animate();
});
