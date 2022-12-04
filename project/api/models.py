from django.db import models


class CardModel(models.Model):
    seria = models.PositiveBigIntegerField()
    number = models.PositiveBigIntegerField()
    release_date = models.DateTimeField()
    expiry_date = models.DateTimeField()
    use_date = models.DateTimeField()
    sum = models.IntegerField()
    status = models.CharField(
        max_length=10,
        choices=
        [
            ('Not Active', 'NOT_ACTIVE'),
            ('Active', 'ACTIVE'),
            ('Expired', 'EXPIRED')
        ],
        default='Not Active'
    )
