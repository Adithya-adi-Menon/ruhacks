from djitellopy import tello
import cv2




me=tello.Tello()
me.connect()
print("Battery:",me.get_battery())
me.streamon()


# This is the list of algo to try and pick the best ones, varies according to surroundings
# tracker = cv2.legacy_TrackerBoosting_create()
# tracker = cv2.legacy_TrackerMIL_create()
# tracker = cv2.legacy_TrackerKCF_create()
# tracker = cv2.legacy_TrackerTLD_create()
# tracker = cv2.legacy_TrackerMedianFlow_create()
# tracker = cv2.legacy_TrackerCSRT_create()
tracker = cv2.legacy_TrackerMOSSE.create()



frame=me.get_frame_read().frame
bbox = cv2.selectROI("Tracking", frame, False)
tracker.init(frame, bbox)


def drawBox(img, bbox):
    x, y, w, h = int(bbox[0]), int(bbox[1]), int(bbox[2]), int(bbox[3])
    cv2.rectangle(img, (x, y), ((x + w), (y + h)), (255, 0, 255), 3, 3)
    cv2.putText(img, "Tracking", (100, 75), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)


while True:

    timer = cv2.getTickCount()
    img=me.get_frame_read().frame
    success, bbox = tracker.update(img)

    if success:
        drawBox(img, bbox)
    else:
        cv2.putText(img, "Lost", (100, 75), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

    cv2.rectangle(img, (15, 15), (200, 90), (255, 0, 255), 2)
    cv2.putText(img, "Fps:", (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 255), 2)
    cv2.putText(img, "Status:", (20, 75), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 255), 2)

    fps = cv2.getTickFrequency() / (cv2.getTickCount() - timer)
    if fps > 60:
        myColor = (20, 230, 20)
    elif fps > 20:
        myColor = (230, 20, 20)
    else:
        myColor = (20, 20, 230)
    cv2.putText(img, str(int(fps)), (75, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.7, myColor, 2)

    cv2.imshow("Final", img)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break