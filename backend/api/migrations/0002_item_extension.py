# Generated by Django 5.0.4 on 2024-07-09 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='extension',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
