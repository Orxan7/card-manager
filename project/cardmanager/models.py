from django.db import models


class CardModel(models.Model):
    seria = models.PositiveBigIntegerField()
    number = models.PositiveBigIntegerField()
    release_date = models.DateTimeField()
    expiry_date = models.DateTimeField()
    use_date = models.DateTimeField()
    sum = models.IntegerField()
    status = models.TextChoices('Status', 'NOT_ACTIVE ACTIVE EXPIRED')
