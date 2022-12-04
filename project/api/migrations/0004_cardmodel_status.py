# Generated by Django 4.1.3 on 2022-12-04 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_cardmodel_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='cardmodel',
            name='status',
            field=models.CharField(choices=[('NA', 'NOT_ACTIVE'), ('AC', 'ACTIVE'), ('EX', 'EXPIRED')], default='NA', max_length=2),
        ),
    ]