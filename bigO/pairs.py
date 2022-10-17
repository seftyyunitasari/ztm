""" log all pairs of array """

boxes = [1, 2, 3, 4, 5]

for box in boxes:
    i = 0
    while i < len(boxes):
        print(box, boxes[i])
        i += 1